import React from 'react';
import {connect} from 'react-redux';

class CharacterList extends React.Component {
    
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}
            >
                <aside>
                    <h1>Breaking Bad Characters</h1>
                    <div>
                            {this.props.loading1 === true ?
                            <h1>Loading</h1> :
                            this.props.characters1.map((val,i) => {
                                return <h1 key={i}>{val.name}</h1>
                            })}
                    </div>
                </aside>
                <aside>
                    <h1>Star Wars Characters</h1>
                    <div>
                        {this.props.loading === true ?
                        <h1>Loading</h1> :
                        this.props.characters.map((val,i) => {
                            return <h1 key={i}>{val.name}</h1>
                        })}
                    </div>
                </aside>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    console.log(reduxState);
    return {
        characters: reduxState.starWarsReducer.characters,
        loading: reduxState.starWarsReducer.loading,
        characters1: reduxState.breakingBadReducer.characters1,
        loading1: reduxState.breakingBadReducer.loading1
    }
}

export default connect(mapStateToProps)(CharacterList);