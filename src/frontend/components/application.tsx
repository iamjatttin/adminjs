/* eslint-disable react/no-children-prop */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import ViewHelpers from '../../backend/utils/view-helpers'
import Sidebar from './app/sidebar/sidebar'
import TopBar from './app/top-bar'

import {
  Dashboard, ResourceAction, RecordAction, Page, BulkAction, DesignSystem, Resource,
} from './routes'
import { Drawer, Box, Navigation } from './design-system'

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`

const App: React.FC = () => {
  const h = new ViewHelpers()

  const resourceId = ':resourceId'
  const actionName = ':actionName'
  const recordId = ':recordId'
  const pageName = ':pageName'

  const recordActionUrl = h.recordActionUrl({ resourceId, recordId, actionName })
  const resourceActionUrl = h.resourceActionUrl({ resourceId, actionName })
  const bulkActionUrl = h.bulkActionUrl({ resourceId, actionName })
  const resourceUrl = h.resourceUrl({ resourceId })
  const pageUrl = h.pageUrl(pageName)
  const designSystemUrl = h.designSystemUrl()

  return (
    <React.Fragment>
      <GlobalStyle />
      <Box height="100%" flex>
        <Sidebar />
      </Box>
    </React.Fragment>

  )
}

export default App


// <GlobalStyle />
//       <ApplicationWrapper>
//         <Sidebar />
//         <Core>
//           {/* <TopBar /> */}
//           <Switch>
//             {/* <Route path={h.dashboardUrl()} exact component={Dashboard} /> */}
//             <Route path={pageUrl} exact component={Page} />
//             <Route path={designSystemUrl} exact component={DesignSystem} />
//             <Route path={resourceUrl} component={Resource} />
//           </Switch>
//           <Route
//             path={recordActionUrl}
//             children={props => (
//               <Drawer hidden={!props.match}>
//                 {props.match && <RecordAction {...props} />}
//               </Drawer>
//             )}
//           />
//           <Route
//             path={bulkActionUrl}
//             children={props => (
//               <Drawer hidden={!props.match}>
//                 {props.match && <BulkAction {...props} />}
//               </Drawer>
//             )}
//           />
//           <Route
//             path={resourceActionUrl}
//             children={props => (
//               <Drawer hidden={!props.match}>
//                 {props.match && <ResourceAction {...props as any} />}
//               </Drawer>
//             )}
//           />
//         </Core>
//       </ApplicationWrapper>
