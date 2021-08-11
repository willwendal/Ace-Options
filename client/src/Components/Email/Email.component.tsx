import './Email.css'
import UserState from '../../types/UserState'


interface Props {
  userState: UserState,

}

export default function Email({userState}: Props) {
  console.log(userState)
  return (
    <div className="Email">
      User:
      <div id="email-box" data-testid="test-email-box">
        {userState.email}
      </div>
    </div>
  )
}
