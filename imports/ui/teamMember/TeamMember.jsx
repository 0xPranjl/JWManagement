import React, { Component } from 'react'

export default class TeamMember extends Component {
  render () {
    if (this.props.styleName) {
      let styledName = this.props.member.name

      if (this.props.member.teamleader) {
        styledName = (
          <b>{styledName}</b>
        )
      } else if (this.props.member.substituteTeamleader) {
        styledName = (
          <i>{styledName}</i>
        )
      }

      if (this.props.member.thisTeamleader) {
        styledName = (
          <u>{styledName}</u>
        )
      }

      return styledName
    } else {
      return this.props.member.name
    }
  }
}
