import { CognitoUserAttribute } from 'amazon-cognito-identity-js'

import { getUserPool } from './config'

export default function(username, password, attributeList) {
  const userPool = getUserPool()

  return new Promise((resolve, reject) => {
    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}
