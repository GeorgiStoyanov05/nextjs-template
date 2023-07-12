export default function ClientCard({name, description, imgSrc}){
    return (
          <div className="card">
            <img className="avatar" src={imgSrc} alt="avatar" />
            <h3 className="card-name">{name}</h3>
            <p>
              {description}
            </p>
          </div>
    );
}