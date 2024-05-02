import profile from '../../../images/profile.png'

function Header() {
  return (
    <div className="flex justify-between p-4">
        <h1 className="text text-3xl"> Knowledge Cafe</h1>
    
        <img src={profile} alt="" />
    
    
    </div>
  )
}

export default Header