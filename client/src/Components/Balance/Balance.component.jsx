import './Balance.css';

export default function Balance({ userState }) {
  return (
    <div className="Balance">
      Balance: 
      <div id="balance-box">${userState.balance}</div>
    </div>
  )
}