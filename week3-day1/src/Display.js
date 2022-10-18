// Function based component

const Display = (props) => {
  console.log(props) //Props is always an object

  //destructure to save time
  const {data} = props // can call data.firstName else must add props.data.firstName

  return (
    <div>
      {data.firstName}
    </div>
  )
}

export default Display
