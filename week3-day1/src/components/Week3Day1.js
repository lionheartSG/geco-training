import { Component } from "react"

class Week3Day1 extends Component {
  users = [
    {
      id: 1,
      firstName: "Abdul",
      lastName: "Rafi",
      age: 25,
      email: "user1@user.com",
      realEmail: "abdulrafi@geco.asia",
      avatar: "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
    },
    {
      id: 2,
      firstName: "Mohd",
      lastName: "Sabri",
      age: 30,
      email: "user2@user.com",
      realEmail: "mohdsabri@geco.asia",
      avatar: "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Blank&hatColor=Red&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
    },
    {
      id: 3,
      firstName: "Ng",
      lastName: "Jun Hui",
      age: 22,
      email: "user3@user.com",
      realEmail: "ngjunhui@geco.asia",
      avatar: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=Default&mouthType=Default&skinColor=Light"
    },
    {
      id: 4,
      firstName: "Sean",
      lastName: "Seow",
      age: 29,
      email: "user4@user.com",
      realEmail: "seanseow@geco.asia",
      avatar: "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat2&accessoriesType=Blank&hatColor=Heather&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=Default&mouthType=Default&skinColor=Light"
    }
  ]

  changeEmail = id => {
    this.setState({
      email: this.users.forEach(user => {
        if (user.id === id)
        user.email = user.realEmail
      })
    })
  }

  render() {
    return (
      <div className="user-cards">
        {this.users.map((user) => {
          return (
            <div key={user.id}>
              <div className="user-card">
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <h4>Age: {user.age}</h4>
                <h4>{user.email}</h4>
                <img src={user.avatar} alt="" />
                <button key={user.id} onClick={this.changeEmail.bind(this, user.id)}>Click to get real email</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Week3Day1
