import { createContext, useState, useContext } from 'react'
const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSetbarOpen] = useState(false)
  const [pageId, setPageId] = useState(null)

  const openSidebar = () => {
    setIsSetbarOpen(true)
  }

  const closeSidebar = () => {
    setIsSetbarOpen(false)
  }

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
