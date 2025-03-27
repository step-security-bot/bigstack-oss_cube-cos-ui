import { Navigate, Route, Routes } from 'react-router'
import { HomeChartPage } from './pages/home/chart/HomeChartPage'
import { HomeHealthPage } from './pages/home/health/HomeHealthPage'
import { HomeLayout } from './pages/home/HomeLayout'
import { HomeManagePage } from './pages/home/manage/HomeManagePage'
import { HomeOverviewPage } from './pages/home/overview/HomeOverviewPage'
import { HealthDetailsPage } from './pages/home/health/[module]/HealthDetailsPage'
import { SettingsPage } from './pages/settings/SettingsPage'
import { IntegrationsPage } from './pages/integrations/IntegrationsPage'
import { EventsLayout } from './pages/events/EventsLayout'
import { TuningsPage } from './pages/events/tunings/TuningsPage'
import { CreateTuningsPage } from './pages/events/tunings/create/CreateTuningsPage'

export const CosRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        index={true}
        element={<Navigate to="/home" replace={true} />}
      />
      <Route path="/home" element={<HomeLayout />}>
        <Route index={true} element={<HomeOverviewPage />} />
        <Route path="/home/chart" element={<HomeChartPage />} />
        <Route path="/home/health" element={<HomeHealthPage />} />
        <Route path="/home/health/:module" element={<HealthDetailsPage />} />
        <Route path="/home/manage" element={<HomeManagePage />} />
      </Route>
      <Route path="/events" element={<EventsLayout />}>
        <Route path="/events/tunings" element={<TuningsPage />} />
      </Route>
      {/* The Create tunings route is placed outside of EventsLayout because
        the shared tabs should not be displayed on the Create tunings page. */}
      <Route path="/events/tunings/create" element={<CreateTuningsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/integrations" element={<IntegrationsPage />} />
      <Route path="*" element={<div>TODO: Not Found Page</div>} />
    </Routes>
  )
}
