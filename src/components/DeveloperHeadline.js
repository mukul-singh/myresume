import React from 'react';
import DeveloperHeadline from './DeveloperHeadline';

class ResumeSummary extends React.Component {
    render() {
        return(
            <div>
                <div className="col-xs-8 col-sm-8 col-md-8 center">
                    <img src={this.props.userImage} className="img-responsive img-thumbnail img-circle" />
                </div>
                <h2 className="text-center">{this.props.developerName}</h2>
                <h5 className="text-center mar-b0">Software Engineer (Full Stack)</h5>
                <br/>
            </div>
        );
    };
}

export default ResumeSummary;
