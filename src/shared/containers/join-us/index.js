import ComponentRenderer from '../../components/component-renderer';
import Container from '../../components/container';
import React from 'react';
import Jobs from '../../components/jobs';
import Section from '../../components/section';
import styles from './style.css';
import Video from '../../components/video';
import HR from '../../components/hr';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Cell } from '../../components/grid';
import { updateContentArea } from '../../content-areas';

const titles = {
  type: 'Content',
  props: {
    children: [
      {
        type: 'Title1',
        props: {
          children: 'Join us'
        }
      },
      {
        type: 'Title3',
        props: {
          children: "Are we what you're looking for?*"
        }
      }
    ]
  }
};

const join = {
  type: 'Content',
  props: {
    children: [{
      type: 'Paragraph',
      props: {
        children: "We love doing fantastic work for our clients. We do this in integrated teams which are completely open with each other and our customers. It's all about communication and collaboration. It's about being innovative, being inspired, having fun and making magical things happen. Oh, and we're right in the heart of Tech City, Shoreditch so there's no shortage of great coffee shops..."
      }
    }, {
      type: 'Paragraph',
      props: {
        children: [{
          type: 'Strong',
          props: {
            children: "* And vice versa"
          }
        }]
      }
    }]
  }
};

const apply = {
  type: 'Content',
  props: {
    children: [
      {
        type: 'Title2',
        props: {
          children: 'How to Apply'
        }
      }, {
        type: 'Paragraph',
        props: {
          children: [
            "If you'd like more information, you want to apply, or you'd simply like to say 'hello', then please get in touch with your CV, Stackoverflow profile, Github, code, portfolio and anything else you think we might be interested in, at: ",
            {
              type: 'Link',
              props: {
                href: "mailto:jobs@red-badger.com",
                children: "jobs@red-badger.com."
              }
            }
          ],
          align: 'center'
        }
      }
    ]
  }
};

const vacancies = {
  type: 'Title2',
  props: {
    children: 'Current Vacancies'
  }
};

function JoinUs () {
  return (
    <div>
      <Section>
        <Container>
          <ComponentRenderer data={titles} />
          <Grid fit>
            <Cell>
              <ComponentRenderer data={join} />
            </Cell>
            <Cell>
              <Video id="110925126" type="vimeo" />
            </Cell>
          </Grid>
          <HR color="red" />
          <ComponentRenderer data={vacancies} />
          <Jobs />
        </Container>
      </Section>
      <div className={styles.apply}>
        <Section>
          <Container>
            <ComponentRenderer data={apply} />
          </Container>
        </Section>
      </div>
    </div>
  );
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({updateContentArea}, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(JoinUs);