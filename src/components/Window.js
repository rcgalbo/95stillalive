import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TitleBar from './TitleBar'
import MenuBar from './MenuBar'
import './Window.css'

class Window extends Component {
  render () {
    const style = {
      width: `${this.props.width}px`,
      height: `${this.props.height}px`,
      left: `${this.props.x}px`,
      top: `${this.props.y}px`,
    }

    return (
      <div className="Window" style={style}>
        <TitleBar handleClose={() => {}} />
        <MenuBar />

        <div className="Window-main">
          <div className="frame win95-well-border">
            <div className="content">
              <p>Lorem ipsum dolor sit amet, no eum quas fuisset accusamus, his eirmod admodum ut, et mea facete sententiae dissentias. Sea augue affert in. An eam illum vituperata. Reque gloriatur no nec, ex vix audiam deseruisse. Has quas graeco docendi te, his cu option forensibus definitiones. Eos probatus phaedrum no, no eos wisi meliore, est ne viderer legendos.</p>
              <p>Nam percipitur neglegentur ei, vocibus temporibus signiferumque ut mea, pro modo nemore oporteat ne. Vis no alienum prodesset, pri nostrud dolorum definitiones ex. Vix ad audire democritum, te nam sapientem disputationi. Usu id reque suavitate sententiae, eu dolor ullamcorper theophrastus eos, id has vocibus legendos. Dicat antiopam iudicabit cu nec, eam vidit partem volumus ex, diceret albucius consulatu mea no.</p>
              <p>Ius vide facer oportere te, ne cum graeco facete aliquip, an choro vituperatoribus mel. Pro ea minim oblique nonumes, nobis gloriatur vituperatoribus his ne. Ex tempor mollis mediocritatem vis. Ne lorem intellegat vel. Ex sale tantas per, pro fugit tempor in.</p>
              <p>Eum ut mollis persius, eum ex electram partiendo. In reque nusquam quo, cum cu ullum definitionem. Summo aliquip placerat usu in. No eos purto habeo choro, mea mundi putant consequuntur te, et usu modo verear virtute.</p>
              <p>Mucius appetere qualisque eu ius. At idque nemore neglegentur usu, saepe efficiendi nec ex, democritum dissentiet quo an. No nihil percipit postulant qui. Per an prima oblique.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Window.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
}

Window.defaultProps = {
  width: 400,
  height: 300,
  x: 0,
  y: 0
}

export default Window
