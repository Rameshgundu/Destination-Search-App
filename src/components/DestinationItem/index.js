import './index.css'

const DestinationItem = props => {
  const {places} = props
  const {id, name, imgUrl} = places
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p className="place-name">{name}</p>
    </li>
  )
}
export default DestinationItem
