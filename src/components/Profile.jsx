function Profile() {
  return (
    <div>
      <h1>Profile Card</h1>

      <ProfileCard
        name="Neha Sharma"
        age={20}
        greeting={
          <strong>
            Hello, I'm Neha, currently studying Computer Science in PSIT Kanpur.
          </strong>
        }
      >
        <p>Hobbies: Reading, Painting</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Rahul Kumar"
        age={22}
        greeting={
          <strong>
            Hello, I'm Rahul, currently studying Computer Science in PSIT
            Kanpur.
          </strong>
        }
      >
        <p>Hobbies: Reading, Gaming</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Anjali Singh"
        age={25}
        greeting={
          <strong>
            Hello, I'm Anjali, currently studying Computer Science in PSIT
            Kanpur.
          </strong>
        }
      >
        <p>Hobbies: Reading, Dancing</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

export default Profile;

function ProfileCard({ name, age, greeting, children }) {
  //const { name, age, greeting, children } = props;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <div>{greeting}</div>
      <div>{children}</div>
    </div>
  );
}
