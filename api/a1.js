const template = require("./template.js")

exports.handler = async event => {
    if (event.headers.referer && event.headers.referer.includes('facebook')) {
        return {
          statusCode: 301,
          headers: {
            location: 'https://itsaww.com/2705/artist-created-an-account-where-professional-artists-recreate-childrens-monster-drawings-each-week-20-new-pics/'
          }
        }
      } else {
      return {
        statusCode: 301,
        body: template()
      }
    }
  }
