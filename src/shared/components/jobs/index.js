import React, { Component } from 'react';
import Note from '../note';
import HtmlParser from '../html-parser';
import styles from './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Wall from '../wall';

export class Jobs extends Component {
  static propTypes = {
    jobs: React.PropTypes.arrayOf(React.PropTypes.shape({
      description: React.PropTypes.string,
      title: React.PropTypes.string,
    })) // eslint-disable-line comma-dangle
  };

  render() {
    const listings = this.props.jobs.map((job, index) => (
      <Note key={index}>
        <Link className={styles.title} to={`/about-us/join-us/${job.slug}`}>
          {job.title}<span className={styles.icon}></span>
        </Link>
        <HtmlParser>{job.description}</HtmlParser>
      </Note>
    ));

    return (
      <div className="jobs">
        <Wall cols={3}>
          {listings}
        </Wall>
      </div>
    );
  }
}

export default connect(state => ({
  jobs: state.jobs,
}))(Jobs);
