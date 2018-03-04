const botBuilder = require('claudia-bot-builder')
const excuse = require('huh')

module.exports = botBuilder((request) => {
  return 'Thanks for sending ' + request.text +
    '. Your message is very important to us, but ' +
    excuse.get()
})

const admin = require('firebase-admin')
exports.handler = (event, context, callback) => {
  // https://stackoverflow.com/questions/37325775/amazon-lambda-to-firebase
  context.callbackWaitsForEmptyEventLoop = false

  // In AWS lambda, it will cause double initialization.
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({}),
      databaseURL: 'https://catcatchatbot.firebaseio.com',
    })
  }

  const ref = admin.database().ref(`/foo`)
  ref.child('bar').set('hi').then(data => {
    callback(null, data.val())
    context.succeed()
  }).catch(err => {
    callback(err)
    context.succeed()
  })
}