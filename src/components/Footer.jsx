import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="right-bar">
            <div data-simplebar className="h-100">
                <div className="rightbar-title d-flex align-items-center p-3">

                    <h5 className="m-0 me-2">Theme Customizer</h5>

                    <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
                        <i className="mdi mdi-close noti-icon"></i>
                    </a>
                </div>
                <hr className="m-0" />

                <div className="p-4">
                    <h6 className="mb-3">Layout</h6>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="layout" id="layout-vertical" value="vertical" />
                        <label className="form-check-label" for="layout-vertical">Vertical</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="layout"
                            id="layout-horizontal" value="horizontal" />
                        <label className="form-check-label" for="layout-horizontal">Horizontal</label>
                    </div>

                    <h6 className="mt-4 mb-3 pt-2">Layout Mode</h6>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="layout-mode"
                            id="layout-mode-light" value="light" />
                        <label className="form-check-label" for="layout-mode-light">Light</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="layout-mode"
                            id="layout-mode-dark" value="dark" />
                        <label className="form-check-label" for="layout-mode-dark">Dark</label>
                    </div>

                    <h6 className="mt-4 mb-3 pt-2">Layout Width</h6>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="layout-width"
                            id="layout-width-fuild" value="fuild" onchange="document.body.setAttribute('data-layout-size', 'fluid')" />
                        <label className="form-check-label" for="layout-width-fuild">Fluid</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="layout-width"
                            id="layout-width-boxed" value="boxed" onchange="document.body.setAttribute('data-layout-size', 'boxed')" />
                        <label className="form-check-label" for="layout-width-boxed">Boxed</label>
                    </div>

                    <h6 className="mt-4 mb-3 pt-2">Layout Position</h6>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="layout-position"
                            id="layout-position-fixed" value="fixed" onchange="document.body.setAttribute('data-layout-scrollable', 'false')" />
                        <label className="form-check-label" for="layout-position-fixed">Fixed</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="layout-position"
                            id="layout-position-scrollable" value="scrollable" onchange="document.body.setAttribute('data-layout-scrollable', 'true')" />
                        <label className="form-check-label" for="layout-position-scrollable">Scrollable</label>
                    </div>

                    <h6 className="mt-4 mb-3 pt-2">Topbar Color</h6>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="topbar-color"
                            id="topbar-color-light" value="light" onchange="document.body.setAttribute('data-topbar', 'light')" />
                        <label className="form-check-label" for="topbar-color-light">Light</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="topbar-color"
                            id="topbar-color-dark" value="dark" onchange="document.body.setAttribute('data-topbar', 'dark')" />
                        <label className="form-check-label" for="topbar-color-dark">Dark</label>
                    </div>

                    <h6 className="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Size</h6>

                    <div className="form-check sidebar-setting">
                        <input className="form-check-input" type="radio" name="sidebar-size"
                            id="sidebar-size-default" value="default" onchange="document.body.setAttribute('data-sidebar-size', 'lg')" />
                        <label className="form-check-label" for="sidebar-size-default">Default</label>
                    </div>
                    <div className="form-check sidebar-setting">
                        <input className="form-check-input" type="radio" name="sidebar-size"
                            id="sidebar-size-compact" value="compact" onchange="document.body.setAttribute('data-sidebar-size', 'md')" />
                        <label className="form-check-label" for="sidebar-size-compact">Compact</label>
                    </div>
                    <div className="form-check sidebar-setting">
                        <input className="form-check-input" type="radio" name="sidebar-size"
                            id="sidebar-size-small" value="small" onchange="document.body.setAttribute('data-sidebar-size', 'sm')" />
                        <label className="form-check-label" for="sidebar-size-small">Small (Icon View)</label>
                    </div>

                    <h6 className="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Color</h6>

                    <div className="form-check sidebar-setting">
                        <input className="form-check-input" type="radio" name="sidebar-color"
                            id="sidebar-color-light" value="light" onchange="document.body.setAttribute('data-sidebar', 'light')" />
                        <label className="form-check-label" for="sidebar-color-light">Light</label>
                    </div>
                    <div className="form-check sidebar-setting">
                        <input className="form-check-input" type="radio" name="sidebar-color"
                            id="sidebar-color-dark" value="dark" onchange="document.body.setAttribute('data-sidebar', 'dark')" />
                        <label className="form-check-label" for="sidebar-color-dark">Dark</label>
                    </div>
                    <div className="form-check sidebar-setting">
                        <input className="form-check-input" type="radio" name="sidebar-color"
                            id="sidebar-color-brand" value="brand" onchange="document.body.setAttribute('data-sidebar', 'brand')" />
                        <label className="form-check-label" for="sidebar-color-brand">Brand</label>
                    </div>

                    <h6 className="mt-4 mb-3 pt-2">Direction</h6>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="layout-direction"
                            id="layout-direction-ltr" value="ltr" />
                        <label className="form-check-label" for="layout-direction-ltr">LTR</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="layout-direction"
                            id="layout-direction-rtl" value="rtl" />
                        <label className="form-check-label" for="layout-direction-rtl">RTL</label>
                    </div>

                </div>

            </div>
        </div>
        <div className="rightbar-overlay"></div>
    </>
  )
}

export default React.memo(Footer)
