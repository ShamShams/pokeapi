import React, { Component } from "react";

class Pokedex extends Component {
  render() {
    const { id, name, sprites, types, base_experience, height, weight } = this.props.data;
    return (
      <div className="Pokedex">
        <div className="card">
          <h3>{name}</h3>
          <img src={sprites.front_default} alt="" />
          <p>
            Type: <span>{types[0].type.name}</span>
          </p>
          <table>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{base_experience}</td>
              </tr>
              <tr>
                <th>PokeID</th>
                <th>Base XP</th>
              </tr>
              <tr>
                <td>{height}</td>
                <td>{weight}</td>
              </tr>
              <tr>
                <th>Height</th>
                <th>Weight</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Pokedex;
