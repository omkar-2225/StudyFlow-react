import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sidebar from './StudyFlowComp/Sidebar/Sidebar.jsx'
import Navbar from './StudyFlowComp/Navbar/Navbar.jsx'
import Layout from './StudyFlowComp/Layout/Layout.jsx'
import { BrowserRouter, Navigate, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Generate from './StudyFlowComp/Generate/Generate.jsx'
import Dashboard from './StudyFlowComp/Dashboard/Dashboard.jsx'
import Library from './StudyFlowComp/Library/Library.jsx'
import Settings from './StudyFlowComp/Settings/Settings.jsx'
import Help from './StudyFlowComp/Help/Help.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/generate' replace/>}/>
          <Route path='/generate' element={<Layout title="Transform your notes" description="Paste your textbook chapters, lecture notes, or articles below to generate intelligent study materials in seconds.">
                <Generate />
              </Layout>}/>

          {/* dashboard */}
          <Route path='/dashboard' element={<Layout title='Dashboard' description='Ready to master your next set of topics today??'>
            <Dashboard />
          </Layout>} />

          {/* Library */}
          <Route path='/library' element={<Layout title="My Library" description='Manage and organize your study resources.'>
            <Library />
          </Layout>}/>

          {/* Settings */}
          <Route path='/settings' element={<Layout title="Settings" description='Customize your experience..'>
            <Settings />
          </Layout>}/>

          {/* help centre */}
          <Route path='/help' element={<Layout title="Help Centre" description="We're here to help you master your studies. Whether you have a technical question or need study tips, our team is ready to support your journey">
            <Help />
          </Layout>}/>

        </Routes>
    </BrowserRouter>
  </StrictMode>
)
