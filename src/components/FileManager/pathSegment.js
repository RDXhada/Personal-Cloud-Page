import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Segment = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #5f6368;

  &:hover {
    text-decoration: underline;
    color: #3f51b5;
  }
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const PathSegment = ({ segmentName, onClick }) => {
  return (
    <React.Fragment>
      <Separator><FontAwesomeIcon icon={faChevronRight} /></Separator>
      <Segment onClick={onClick}>
        {segmentName}
      </Segment>
    </React.Fragment>
  );
};

export default PathSegment;
