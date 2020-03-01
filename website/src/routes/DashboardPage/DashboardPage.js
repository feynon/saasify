import React, { Component } from 'react'
import { theme } from 'react-saasify'
import { withRouter } from 'react-router'
import { withTracker } from 'lib/with-tracker'
import { observer } from 'mobx-react'

import {
  NavHeader,
  NavFooter,
  ScrollToTopOnMount,
  Section,
  ProjectGallery
} from 'components'

import styles from './styles.module.css'

@withTracker
@withRouter
@observer
export class DashboardPage extends Component {
  render() {
    return (
      <div className={theme(styles, 'dashboard-page')}>
        <NavHeader />

        <ScrollToTopOnMount />

        <Section
          id='dashboard'
          title='Dashboard'
          className={theme(styles, 'dashboard')}
        />

        <ProjectGallery
          className={styles.projectGallery}
          onEditProject={this._onEditProject}
        />

        <NavFooter />
      </div>
    )
  }

  _onEditProject = (model) => {
    this.props.history.push(`/projects/${model.id}/edit`)
  }
}
