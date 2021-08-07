import './Email.css'

export default function Email({ userState }) {
  return (
    <div className="Email">
      User:
      <div id="email-box" data-testid="test-email-box">{userState.email}</div>
    </div>
  )
}
