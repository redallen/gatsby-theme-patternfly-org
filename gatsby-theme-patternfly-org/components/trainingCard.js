import React from 'react';
import { Card, CardHead, CardHeader, CardBody, CardFooter, Button } from "@patternfly/react-core";
import { ArrowRightIcon, CubesIcon, ClockIcon, RunningIcon, PuzzlePieceIcon, ChartBarIcon } from '@patternfly/react-icons';
import { Link } from 'gatsby';
import './trainingCard.css';

class TrainingCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card isCompact>
        <CardHead>
          <Card className="small-card-icon">
            {this.props.trainingType === 'htmlcss' || this.props.trainingType === 'reactbasics' ? (
              <CubesIcon className="training-basics" />
            ) : (
                this.props.trainingType === 'reactcomponents' ? (
                  <PuzzlePieceIcon className="training-components" />
                ) : (
                    <ChartBarIcon className="training-charts" />
                  )
              )}
          </Card>
          <div className="level">
            {this.props.level === 'Beginner' ? (
              <RunningIcon className="level-beginner" />
            ) : (
                this.props.level === 'Intermediate' ? (
                  <RunningIcon className="level-intermediate" />
                ) : (
                    <RunningIcon className="level-advanced" />
                  )
              )}
            {this.props.level}
          </div>
        </CardHead>
        <CardHeader>
          {this.props.title}
        </CardHeader>
        <CardBody>
          <div className="pf-org-card-body__time">
            <ClockIcon />
            {this.props.time}
          </div>
          {this.props.description}
        </CardBody>
        <CardFooter>
          <Link
            to="#"
            state={{ katacodaId: 'html-css/module-1' }} // For keeping context on shared pages
          >
            <Button variant="link">
              Start
            </Button>
            <ArrowRightIcon />
          </Link>
        </CardFooter>
      </Card>
    );
  }
}
export default TrainingCard;
