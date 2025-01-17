import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Status } from '@sensenet/default-content-types'
import React from 'react'
import FilterLink from '../containers/FilterLink'

/**
 * class
 */
export class FilterMenu extends React.Component<{}, {}> {
  /**
   * render
   */
  public render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <FilterLink name="All" status={'all' as Status}>
            All
          </FilterLink>
          <FilterLink name="Active" status={Status.active}>
            Active
          </FilterLink>
          <FilterLink name="Completed" status={Status.completed}>
            Completed
          </FilterLink>
        </Toolbar>
      </AppBar>
    )
  }
}
