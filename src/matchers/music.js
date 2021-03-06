const { pickRandom, replaceText, now, onCooldown } = require('../utils')


const
  REGEX = /^-p(lay)? (.+)/i,
  REPLIES = [
    //'ugh, why u do this %AUTHOR%?',
    'this is my jam!',
    //'please no, not this again',
    'best song eva'
  ],
  NAME = 'Music',
  COMMAND_CD_IN_S = 1800

let last_time_run = null

exports.name = NAME

exports.regex = REGEX

exports.skip_reaction = true

exports.process = msg => {
  if (!onCooldown(last_time_run, COMMAND_CD_IN_S)) {
    last_time_run = now()
    let content = replaceText(pickRandom(REPLIES), {
      AUTHOR: msg.author.username
    })
    msg.channel.send(content)
  }
}