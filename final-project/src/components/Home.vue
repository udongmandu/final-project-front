<template>
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <!--begin::Content wrapper-->
    <div class="d-flex flex-column flex-column-fluid">
      <!--begin::Toolbar-->
      <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
        <!--begin::Toolbar container-->
        <div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
          <!--begin::Page title-->
          <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
            <!--begin::Title-->
            <h1 class="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">Account Overview</h1>
            <!--end::Title-->
            <!--begin::Breadcrumb-->
            <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              <!--begin::Item-->
              <li class="breadcrumb-item text-muted">
                <a href="index.html" class="text-muted text-hover-primary">Home</a>
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <span class="bullet bg-gray-500 w-5px h-2px"></span>
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-muted">Account</li>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
          </div>
          <!--end::Page title-->
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <!--begin::Filter menu-->
            <div class="m-0">
              <!--begin::Menu toggle-->
              <a href="#" class="btn btn-sm btn-flex btn-secondary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                <i class="ki-duotone ki-filter fs-6 text-muted me-1">
                  <span class="path1"></span>
                  <span class="path2"></span> </i
                >Filter</a
              >
              <!--end::Menu toggle-->
              <!--begin::Menu 1-->
              <div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_65a1214c95399">
                <!--begin::Header-->
                <div class="px-7 py-5">
                  <div class="fs-5 text-gray-900 fw-bold">Filter Options</div>
                </div>
                <!--end::Header-->
                <!--begin::Menu separator-->
                <div class="separator border-gray-200"></div>
                <!--end::Menu separator-->
                <!--begin::Form-->
                <div class="px-7 py-5">
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Status:</label>
                    <!--end::Label-->
                    <!--begin::Input-->
                    <div>
                      <select
                        class="form-select form-select-solid select2-hidden-accessible"
                        multiple=""
                        data-kt-select2="true"
                        data-close-on-select="false"
                        data-placeholder="Select option"
                        data-dropdown-parent="#kt_menu_65a1214c95399"
                        data-allow-clear="true"
                        data-select2-id="select2-data-7-udry"
                        tabindex="-1"
                        aria-hidden="true"
                        data-kt-initialized="1"
                      >
                        <option></option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="2">In Process</option>
                        <option value="2">Rejected</option></select
                      ><span
                        class="select2 select2-container select2-container--bootstrap5"
                        dir="ltr"
                        data-select2-id="select2-data-8-5a0u"
                        style="width: 100%"
                        ><span class="selection"
                          ><span
                            class="select2-selection select2-selection--multiple form-select form-select-solid"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                            ><ul class="select2-selection__rendered" id="select2-q48f-container"></ul>
                            <span class="select2-search select2-search--inline">
                              <textarea
                                class="select2-search__field"
                                type="search"
                                tabindex="0"
                                autocorrect="off"
                                autocapitalize="none"
                                spellcheck="false"
                                role="searchbox"
                                aria-autocomplete="list"
                                autocomplete="off"
                                aria-label="Search"
                                aria-describedby="select2-q48f-container"
                                placeholder="Select option"
                                style="width: 100%"
                              ></textarea></span></span></span
                        ><span class="dropdown-wrapper" aria-hidden="true"></span
                      ></span>
                    </div>
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Member Type:</label>
                    <!--end::Label-->
                    <!--begin::Options-->
                    <div class="d-flex">
                      <!--begin::Options-->
                      <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                        <input class="form-check-input" type="checkbox" value="1" />
                        <span class="form-check-label">Author</span>
                      </label>
                      <!--end::Options-->
                      <!--begin::Options-->
                      <label class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="2" checked="checked" />
                        <span class="form-check-label">Customer</span>
                      </label>
                      <!--end::Options-->
                    </div>
                    <!--end::Options-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Input group-->
                  <div class="mb-10">
                    <!--begin::Label-->
                    <label class="form-label fw-semibold">Notifications:</label>
                    <!--end::Label-->
                    <!--begin::Switch-->
                    <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                      <input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                      <label class="form-check-label">Enabled</label>
                    </div>
                    <!--end::Switch-->
                  </div>
                  <!--end::Input group-->
                  <!--begin::Actions-->
                  <div class="d-flex justify-content-end">
                    <button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                    <button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                  </div>
                  <!--end::Actions-->
                </div>
                <!--end::Form-->
              </div>
              <!--end::Menu 1-->
            </div>
            <!--end::Filter menu-->
            <!--begin::Secondary button-->
            <!--end::Secondary button-->
            <!--begin::Primary button-->
            <a href="#" class="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Create</a>
            <!--end::Primary button-->
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Toolbar container-->
      </div>
      <!--end::Toolbar-->
      <!--begin::Content-->
      <div id="kt_app_content" class="app-content flex-column-fluid">
        <!--begin::Content container-->
        <div id="kt_app_content_container" class="app-container container-xxl">
          <!--begin::Navbar-->
          <div class="card mb-5 mb-xl-10">
            <div class="card-body pt-9 pb-0">
              <!--begin::Details-->
              <div class="d-flex flex-wrap flex-sm-nowrap">
                <!--begin: Pic-->
                <div class="me-7 mb-4">
                  <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                    <img src="../../public/assets/media/avatars/300-1.jpg" alt="image" />
                    <div
                      class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"
                    ></div>
                  </div>
                </div>
                <!--end::Pic-->
                <!--begin::Info-->
                <div class="flex-grow-1">
                  <!--begin::Title-->
                  <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                    <!--begin::User-->
                    <div class="d-flex flex-column">
                      <!--begin::Name-->
                      <div class="d-flex align-items-center mb-2">
                        <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Max Smith</a>
                        <a href="#">
                          <i class="ki-duotone ki-verify fs-1 text-primary">
                            <span class="path1"></span>
                            <span class="path2"></span>
                          </i>
                        </a>
                      </div>
                      <!--end::Name-->
                      <!--begin::Info-->
                      <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                        <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                          <i class="ki-duotone ki-profile-circle fs-4 me-1">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span> </i
                          >Developer</a
                        >
                        <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                          <i class="ki-duotone ki-geolocation fs-4 me-1">
                            <span class="path1"></span>
                            <span class="path2"></span> </i
                          >SF, Bay Area</a
                        >
                        <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
                          <i class="ki-duotone ki-sms fs-4">
                            <span class="path1"></span>
                            <span class="path2"></span> </i
                          >max@kt.com</a
                        >
                      </div>
                      <!--end::Info-->
                    </div>
                    <!--end::User-->
                    <!--begin::Actions-->
                    <div class="d-flex my-4">
                      <a href="#" class="btn btn-sm btn-light me-2" id="kt_user_follow_button">
                        <i class="ki-duotone ki-check fs-3 d-none"></i>
                        <!--begin::Indicator label-->
                        <span class="indicator-label">Follow</span>
                        <!--end::Indicator label-->
                        <!--begin::Indicator progress-->
                        <span class="indicator-progress"
                          >Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span
                        ></span>
                        <!--end::Indicator progress-->
                      </a>
                      <a href="#" class="btn btn-sm btn-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>
                      <!--begin::Menu-->
                      <div class="me-0">
                        <button
                          class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          <i class="ki-solid ki-dots-horizontal fs-2x"></i>
                        </button>
                        <!--begin::Menu 3-->
                        <div
                          class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                          data-kt-menu="true"
                        >
                          <!--begin::Heading-->
                          <div class="menu-item px-3">
                            <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                          </div>
                          <!--end::Heading-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">Create Invoice</a>
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link flex-stack px-3"
                              >Create Payment
                              <span
                                class="ms-2"
                                data-bs-toggle="tooltip"
                                aria-label="Specify a target name for future usage and reference"
                                data-bs-original-title="Specify a target name for future usage and reference"
                                data-kt-initialized="1"
                              >
                                <i class="ki-duotone ki-information fs-6">
                                  <span class="path1"></span>
                                  <span class="path2"></span>
                                  <span class="path3"></span>
                                </i> </span
                            ></a>
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">Generate Bill</a>
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                            <a href="#" class="menu-link px-3">
                              <span class="menu-title">Subscription</span>
                              <span class="menu-arrow"></span>
                            </a>
                            <!--begin::Menu sub-->
                            <div class="menu-sub menu-sub-dropdown w-175px py-4">
                              <!--begin::Menu item-->
                              <div class="menu-item px-3">
                                <a href="#" class="menu-link px-3">Plans</a>
                              </div>
                              <!--end::Menu item-->
                              <!--begin::Menu item-->
                              <div class="menu-item px-3">
                                <a href="#" class="menu-link px-3">Billing</a>
                              </div>
                              <!--end::Menu item-->
                              <!--begin::Menu item-->
                              <div class="menu-item px-3">
                                <a href="#" class="menu-link px-3">Statements</a>
                              </div>
                              <!--end::Menu item-->
                              <!--begin::Menu separator-->
                              <div class="separator my-2"></div>
                              <!--end::Menu separator-->
                              <!--begin::Menu item-->
                              <div class="menu-item px-3">
                                <div class="menu-content px-3">
                                  <!--begin::Switch-->
                                  <label class="form-check form-switch form-check-custom form-check-solid">
                                    <!--begin::Input-->
                                    <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                                    <!--end::Input-->
                                    <!--end::Label-->
                                    <span class="form-check-label text-muted fs-6">Recuring</span>
                                    <!--end::Label-->
                                  </label>
                                  <!--end::Switch-->
                                </div>
                              </div>
                              <!--end::Menu item-->
                            </div>
                            <!--end::Menu sub-->
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3 my-1">
                            <a href="#" class="menu-link px-3">Settings</a>
                          </div>
                          <!--end::Menu item-->
                        </div>
                        <!--end::Menu 3-->
                      </div>
                      <!--end::Menu-->
                    </div>
                    <!--end::Actions-->
                  </div>
                  <!--end::Title-->
                  <!--begin::Stats-->
                  <div class="d-flex flex-wrap flex-stack">
                    <!--begin::Wrapper-->
                    <div class="d-flex flex-column flex-grow-1 pe-8">
                      <!--begin::Stats-->
                      <div class="d-flex flex-wrap">
                        <!--begin::Stat-->
                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                          <!--begin::Number-->
                          <div class="d-flex align-items-center">
                            <i class="ki-duotone ki-arrow-up fs-3 text-success me-2">
                              <span class="path1"></span>
                              <span class="path2"></span>
                            </i>
                            <div
                              class="fs-2 fw-bold counted"
                              data-kt-countup="true"
                              data-kt-countup-value="4500"
                              data-kt-countup-prefix="$"
                              data-kt-initialized="1"
                            >
                              $4,500
                            </div>
                          </div>
                          <!--end::Number-->
                          <!--begin::Label-->
                          <div class="fw-semibold fs-6 text-gray-500">Earnings</div>
                          <!--end::Label-->
                        </div>
                        <!--end::Stat-->
                        <!--begin::Stat-->
                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                          <!--begin::Number-->
                          <div class="d-flex align-items-center">
                            <i class="ki-duotone ki-arrow-down fs-3 text-danger me-2">
                              <span class="path1"></span>
                              <span class="path2"></span>
                            </i>
                            <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="80" data-kt-initialized="1">80</div>
                          </div>
                          <!--end::Number-->
                          <!--begin::Label-->
                          <div class="fw-semibold fs-6 text-gray-500">Projects</div>
                          <!--end::Label-->
                        </div>
                        <!--end::Stat-->
                        <!--begin::Stat-->
                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                          <!--begin::Number-->
                          <div class="d-flex align-items-center">
                            <i class="ki-duotone ki-arrow-up fs-3 text-success me-2">
                              <span class="path1"></span>
                              <span class="path2"></span>
                            </i>
                            <div
                              class="fs-2 fw-bold counted"
                              data-kt-countup="true"
                              data-kt-countup-value="60"
                              data-kt-countup-prefix="%"
                              data-kt-initialized="1"
                            >
                              %60
                            </div>
                          </div>
                          <!--end::Number-->
                          <!--begin::Label-->
                          <div class="fw-semibold fs-6 text-gray-500">Success Rate</div>
                          <!--end::Label-->
                        </div>
                        <!--end::Stat-->
                      </div>
                      <!--end::Stats-->
                    </div>
                    <!--end::Wrapper-->
                    <!--begin::Progress-->
                    <div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                      <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                        <span class="fw-semibold fs-6 text-gray-500">Profile Compleation</span>
                        <span class="fw-bold fs-6">50%</span>
                      </div>
                      <div class="h-5px mx-3 w-100 bg-light mb-3">
                        <div
                          class="bg-success rounded h-5px"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <!--end::Progress-->
                  </div>
                  <!--end::Stats-->
                </div>
                <!--end::Info-->
              </div>
              <!--end::Details-->
              <!--begin::Navs-->
              <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                <!--begin::Nav item-->
                <li class="nav-item mt-2">
                  <a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="account/overview.html">Overview</a>
                </li>
                <!--end::Nav item-->
                <!--begin::Nav item-->
                <li class="nav-item mt-2">
                  <a class="nav-link text-active-primary ms-0 me-10 py-5" href="account/settings.html">Settings</a>
                </li>
                <!--end::Nav item-->
                <!--begin::Nav item-->

                <!--end::Nav item-->
              </ul>
              <!--begin::Navs-->
            </div>
          </div>
          <!--end::Navbar-->
          <!--begin::details View-->
          <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
            <!--begin::Card header-->
            <div class="card-header cursor-pointer">
              <!--begin::Card title-->
              <div class="card-title m-0">
                <h3 class="fw-bold m-0">Profile Details</h3>
              </div>
              <!--end::Card title-->
              <!--begin::Action-->
              <a href="account/settings.html" class="btn btn-sm btn-primary align-self-center">Edit Profile</a>
              <!--end::Action-->
            </div>
            <!--begin::Card header-->
            <!--begin::Card body-->
            <div class="card-body p-9">
              <!--begin::Row-->
              <div class="row mb-7">
                <!--begin::Label-->
                <label class="col-lg-4 fw-semibold text-muted">Full Name</label>
                <!--end::Label-->
                <!--begin::Col-->
                <div class="col-lg-8">
                  <span class="fw-bold fs-6 text-gray-800">Max Smith</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Row-->
              <!--begin::Input group-->
              <div class="row mb-7">
                <!--begin::Label-->
                <label class="col-lg-4 fw-semibold text-muted">Company</label>
                <!--end::Label-->
                <!--begin::Col-->
                <div class="col-lg-8 fv-row">
                  <span class="fw-semibold text-gray-800 fs-6">Keenthemes</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="row mb-7">
                <!--begin::Label-->
                <label class="col-lg-4 fw-semibold text-muted"
                  >Contact Phone
                  <span
                    class="ms-1"
                    data-bs-toggle="tooltip"
                    aria-label="Phone number must be active"
                    data-bs-original-title="Phone number must be active"
                    data-kt-initialized="1"
                  >
                    <i class="ki-duotone ki-information fs-7">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                    </i> </span
                ></label>
                <!--end::Label-->
                <!--begin::Col-->
                <div class="col-lg-8 d-flex align-items-center">
                  <span class="fw-bold fs-6 text-gray-800 me-2">044 3276 454 935</span>
                  <span class="badge badge-success">Verified</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="row mb-7">
                <!--begin::Label-->
                <label class="col-lg-4 fw-semibold text-muted">Company Site</label>
                <!--end::Label-->
                <!--begin::Col-->
                <div class="col-lg-8">
                  <a href="#" class="fw-semibold fs-6 text-gray-800 text-hover-primary">keenthemes.com</a>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="row mb-7">
                <!--begin::Label-->
                <label class="col-lg-4 fw-semibold text-muted"
                  >Country
                  <span
                    class="ms-1"
                    data-bs-toggle="tooltip"
                    aria-label="Country of origination"
                    data-bs-original-title="Country of origination"
                    data-kt-initialized="1"
                  >
                    <i class="ki-duotone ki-information fs-7">
                      <span class="path1"></span>
                      <span class="path2"></span>
                      <span class="path3"></span>
                    </i> </span
                ></label>
                <!--end::Label-->
                <!--begin::Col-->
                <div class="col-lg-8">
                  <span class="fw-bold fs-6 text-gray-800">Germany</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="row mb-7">
                <!--begin::Label-->
                <label class="col-lg-4 fw-semibold text-muted">Communication</label>
                <!--end::Label-->
                <!--begin::Col-->
                <div class="col-lg-8">
                  <span class="fw-bold fs-6 text-gray-800">Email, Phone</span>
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="row mb-10">
                <!--begin::Label-->
                <label class="col-lg-4 fw-semibold text-muted">Allow Changes</label>
                <!--begin::Label-->
                <!--begin::Label-->
                <div class="col-lg-8">
                  <span class="fw-semibold fs-6 text-gray-800">Yes</span>
                </div>
                <!--begin::Label-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Card body-->
          </div>
          <!--end::details View-->
          <!--begin::Row-->
          <div class="row gy-5 g-xl-10">
            <!--begin::Col-->
            <div class="col-xl-8 mb-xl-10">
              <!--begin::Chart widget 5-->
              <div class="card card-flush h-lg-100">
                <!--begin::Header-->
                <div class="card-header flex-nowrap pt-5">
                  <!--begin::Title-->
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bold text-gray-900">Top Selling Categories</span>
                    <span class="text-gray-500 pt-2 fw-semibold fs-6">8k social visitors</span>
                  </h3>
                  <!--end::Title-->
                  <!--begin::Toolbar-->
                  <div class="card-toolbar">
                    <!--begin::Menu-->
                    <button
                      class="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                      data-kt-menu-overflow="true"
                    >
                      <i class="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                        <span class="path4"></span>
                      </i>
                    </button>
                    <!--begin::Menu 2-->
                    <div
                      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                      data-kt-menu="true"
                    >
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <div class="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu separator-->
                      <div class="separator mb-3 opacity-75"></div>
                      <!--end::Menu separator-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">New Ticket</a>
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">New Customer</a>
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                        <!--begin::Menu item-->
                        <a href="#" class="menu-link px-3">
                          <span class="menu-title">New Group</span>
                          <span class="menu-arrow"></span>
                        </a>
                        <!--end::Menu item-->
                        <!--begin::Menu sub-->
                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">Admin Group</a>
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">Staff Group</a>
                          </div>
                          <!--end::Menu item-->
                          <!--begin::Menu item-->
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">Member Group</a>
                          </div>
                          <!--end::Menu item-->
                        </div>
                        <!--end::Menu sub-->
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">New Contact</a>
                      </div>
                      <!--end::Menu item-->
                      <!--begin::Menu separator-->
                      <div class="separator mt-3 opacity-75"></div>
                      <!--end::Menu separator-->
                      <!--begin::Menu item-->
                      <div class="menu-item px-3">
                        <div class="menu-content px-3 py-3">
                          <a class="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                        </div>
                      </div>
                      <!--end::Menu item-->
                    </div>
                    <!--end::Menu 2-->
                    <!--end::Menu-->
                  </div>
                  <!--end::Toolbar-->
                </div>
                <!--end::Header-->
                <!--begin::Body-->
                <div class="card-body pt-5 ps-6">
                  <div id="kt_charts_widget_5" class="min-h-auto" style="min-height: 365px">
                    <div
                      id="apexchartsubqnjpyvg"
                      class="apexcharts-canvas apexchartsubqnjpyvg apexcharts-theme-light"
                      style="width: 779px; height: 350px"
                    >
                      <svg
                        id="SvgjsSvg1098"
                        width="779"
                        height="350"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:svgjs="http://svgjs.dev"
                        class="apexcharts-svg"
                        xmlns:data="ApexChartsNS"
                        transform="translate(0, 0)"
                        style="background: transparent"
                      >
                        <foreignObject x="0" y="0" width="779" height="350"
                          ><div class="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml" style="max-height: 175px"></div
                        ></foreignObject>
                        <g id="SvgjsG1100" class="apexcharts-inner apexcharts-graphical" transform="translate(105.642578125, 30)">
                          <defs id="SvgjsDefs1099">
                            <linearGradient id="SvgjsLinearGradient1103" x1="0" y1="0" x2="0" y2="1">
                              <stop id="SvgjsStop1104" stop-opacity="0.4" stop-color="rgba(216,227,240,0.4)" offset="0"></stop>
                              <stop id="SvgjsStop1105" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                              <stop id="SvgjsStop1106" stop-opacity="0.5" stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                            </linearGradient>
                            <clipPath id="gridRectMaskubqnjpyvg">
                              <rect
                                id="SvgjsRect1108"
                                width="654.4615879058838"
                                height="282.03333127593993"
                                x="-2"
                                y="-2"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fff"
                              ></rect>
                            </clipPath>
                            <clipPath id="forecastMaskubqnjpyvg"></clipPath>
                            <clipPath id="nonForecastMaskubqnjpyvg"></clipPath>
                            <clipPath id="gridRectMarkerMaskubqnjpyvg">
                              <rect
                                id="SvgjsRect1109"
                                width="654.4615879058838"
                                height="282.03333127593993"
                                x="-2"
                                y="-2"
                                rx="0"
                                ry="0"
                                opacity="1"
                                stroke-width="0"
                                stroke="none"
                                stroke-dasharray="0"
                                fill="#fff"
                              ></rect>
                            </clipPath>
                          </defs>
                          <rect
                            id="SvgjsRect1107"
                            width="0"
                            height="278.03333127593993"
                            x="0"
                            y="0"
                            rx="0"
                            ry="0"
                            opacity="1"
                            stroke-width="0"
                            stroke-dasharray="3"
                            fill="url(#SvgjsLinearGradient1103)"
                            class="apexcharts-xcrosshairs"
                            y2="278.03333127593993"
                            filter="none"
                            fill-opacity="0.9"
                          ></rect>
                          <line
                            id="SvgjsLine1134"
                            x1="0"
                            y1="279.03333127593993"
                            x2="0"
                            y2="285.03333127593993"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <line
                            id="SvgjsLine1136"
                            x1="162.91539697647096"
                            y1="279.03333127593993"
                            x2="162.91539697647096"
                            y2="285.03333127593993"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <line
                            id="SvgjsLine1138"
                            x1="325.8307939529419"
                            y1="279.03333127593993"
                            x2="325.8307939529419"
                            y2="285.03333127593993"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <line
                            id="SvgjsLine1140"
                            x1="488.7461909294129"
                            y1="279.03333127593993"
                            x2="488.7461909294129"
                            y2="285.03333127593993"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <line
                            id="SvgjsLine1142"
                            x1="651.6615879058838"
                            y1="279.03333127593993"
                            x2="651.6615879058838"
                            y2="285.03333127593993"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            stroke-linecap="butt"
                            class="apexcharts-xaxis-tick"
                          ></line>
                          <g id="SvgjsG1129" class="apexcharts-grid">
                            <g id="SvgjsG1130" class="apexcharts-gridlines-horizontal"></g>
                            <g id="SvgjsG1131" class="apexcharts-gridlines-vertical">
                              <line
                                id="SvgjsLine1135"
                                x1="162.91539697647096"
                                y1="0"
                                x2="162.91539697647096"
                                y2="278.03333127593993"
                                stroke="#dbdfe9"
                                stroke-dasharray="4"
                                stroke-linecap="butt"
                                class="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1137"
                                x1="325.8307939529419"
                                y1="0"
                                x2="325.8307939529419"
                                y2="278.03333127593993"
                                stroke="#dbdfe9"
                                stroke-dasharray="4"
                                stroke-linecap="butt"
                                class="apexcharts-gridline"
                              ></line>
                              <line
                                id="SvgjsLine1139"
                                x1="488.7461909294129"
                                y1="0"
                                x2="488.7461909294129"
                                y2="278.03333127593993"
                                stroke="#dbdfe9"
                                stroke-dasharray="4"
                                stroke-linecap="butt"
                                class="apexcharts-gridline"
                              ></line>
                            </g>
                            <line
                              id="SvgjsLine1144"
                              x1="0"
                              y1="278.03333127593993"
                              x2="650.4615879058838"
                              y2="278.03333127593993"
                              stroke="transparent"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                            ></line>
                            <line
                              id="SvgjsLine1143"
                              x1="0"
                              y1="1"
                              x2="0"
                              y2="278.03333127593993"
                              stroke="transparent"
                              stroke-dasharray="0"
                              stroke-linecap="butt"
                            ></line>
                          </g>
                          <g id="SvgjsG1132" class="apexcharts-grid-borders">
                            <line
                              id="SvgjsLine1133"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="278.03333127593993"
                              stroke="#dbdfe9"
                              stroke-dasharray="4"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                            <line
                              id="SvgjsLine1141"
                              x1="651.6615879058838"
                              y1="0"
                              x2="651.6615879058838"
                              y2="278.03333127593993"
                              stroke="#dbdfe9"
                              stroke-dasharray="4"
                              stroke-linecap="butt"
                              class="apexcharts-gridline"
                            ></line>
                          </g>
                          <g id="SvgjsG1110" class="apexcharts-bar-series apexcharts-plot-series">
                            <g id="SvgjsG1111" class="apexcharts-series" rel="1" seriesName="series-1" data:realIndex="0">
                              <path
                                id="SvgjsPath1116"
                                d="M 4.101 8.359523662567138 L 605.908738661766 8.359523662567138 C 607.908738661766 8.359523662567138 609.908738661766 10.359523662567138 609.908738661766 12.359523662567138 L 609.908738661766 27.35952366256714 C 609.908738661766 29.35952366256714 607.908738661766 31.35952366256714 605.908738661766 31.35952366256714 L 4.101 31.35952366256714 C 2.101 31.35952366256714 0.101 29.35952366256714 0.101 27.35952366256714 L 0.101 12.359523662567138 C 0.101 10.359523662567138 2.101 8.359523662567138 4.101 8.359523662567138 Z "
                                fill="rgba(62,151,255,0.85)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskubqnjpyvg)"
                                pathTo="M 4.101 8.359523662567138 L 605.908738661766 8.359523662567138 C 607.908738661766 8.359523662567138 609.908738661766 10.359523662567138 609.908738661766 12.359523662567138 L 609.908738661766 27.35952366256714 C 609.908738661766 29.35952366256714 607.908738661766 31.35952366256714 605.908738661766 31.35952366256714 L 4.101 31.35952366256714 C 2.101 31.35952366256714 0.101 29.35952366256714 0.101 27.35952366256714 L 0.101 12.359523662567138 C 0.101 10.359523662567138 2.101 8.359523662567138 4.101 8.359523662567138 Z "
                                pathFrom="M 0.101 8.359523662567138 L 0.101 8.359523662567138 L 0.101 31.35952366256714 L 0.101 31.35952366256714 L 0.101 31.35952366256714 L 0.101 31.35952366256714 L 0.101 31.35952366256714 L 0.101 8.359523662567138 Z"
                                cy="48.07857098770141"
                                cx="609.9077386617661"
                                j="0"
                                val="15"
                                barHeight="23"
                                barWidth="609.807738661766"
                              ></path>
                              <path
                                id="SvgjsPath1118"
                                d="M 4.101 48.07857098770141 L 483.94719092941284 48.07857098770141 C 485.94719092941284 48.07857098770141 487.94719092941284 50.07857098770141 487.94719092941284 52.07857098770141 L 487.94719092941284 67.07857098770141 C 487.94719092941284 69.07857098770141 485.94719092941284 71.07857098770141 483.94719092941284 71.07857098770141 L 4.101 71.07857098770141 C 2.101 71.07857098770141 0.101 69.07857098770141 0.101 67.07857098770141 L 0.101 52.07857098770141 C 0.101 50.07857098770141 2.101 48.07857098770141 4.101 48.07857098770141 Z "
                                fill="rgba(241,65,108,0.85)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskubqnjpyvg)"
                                pathTo="M 4.101 48.07857098770141 L 483.94719092941284 48.07857098770141 C 485.94719092941284 48.07857098770141 487.94719092941284 50.07857098770141 487.94719092941284 52.07857098770141 L 487.94719092941284 67.07857098770141 C 487.94719092941284 69.07857098770141 485.94719092941284 71.07857098770141 483.94719092941284 71.07857098770141 L 4.101 71.07857098770141 C 2.101 71.07857098770141 0.101 69.07857098770141 0.101 67.07857098770141 L 0.101 52.07857098770141 C 0.101 50.07857098770141 2.101 48.07857098770141 4.101 48.07857098770141 Z "
                                pathFrom="M 0.101 48.07857098770141 L 0.101 48.07857098770141 L 0.101 71.07857098770141 L 0.101 71.07857098770141 L 0.101 71.07857098770141 L 0.101 71.07857098770141 L 0.101 71.07857098770141 L 0.101 48.07857098770141 Z"
                                cy="87.79761831283568"
                                cx="487.94619092941286"
                                j="1"
                                val="12"
                                barHeight="23"
                                barWidth="487.84619092941284"
                              ></path>
                              <path
                                id="SvgjsPath1120"
                                d="M 4.101 87.79761831283568 L 402.63949244117737 87.79761831283568 C 404.63949244117737 87.79761831283568 406.63949244117737 89.79761831283568 406.63949244117737 91.79761831283568 L 406.63949244117737 106.79761831283568 C 406.63949244117737 108.79761831283568 404.63949244117737 110.79761831283568 402.63949244117737 110.79761831283568 L 4.101 110.79761831283568 C 2.101 110.79761831283568 0.101 108.79761831283568 0.101 106.79761831283568 L 0.101 91.79761831283568 C 0.101 89.79761831283568 2.101 87.79761831283568 4.101 87.79761831283568 Z "
                                fill="rgba(80,205,137,0.85)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskubqnjpyvg)"
                                pathTo="M 4.101 87.79761831283568 L 402.63949244117737 87.79761831283568 C 404.63949244117737 87.79761831283568 406.63949244117737 89.79761831283568 406.63949244117737 91.79761831283568 L 406.63949244117737 106.79761831283568 C 406.63949244117737 108.79761831283568 404.63949244117737 110.79761831283568 402.63949244117737 110.79761831283568 L 4.101 110.79761831283568 C 2.101 110.79761831283568 0.101 108.79761831283568 0.101 106.79761831283568 L 0.101 91.79761831283568 C 0.101 89.79761831283568 2.101 87.79761831283568 4.101 87.79761831283568 Z "
                                pathFrom="M 0.101 87.79761831283568 L 0.101 87.79761831283568 L 0.101 110.79761831283568 L 0.101 110.79761831283568 L 0.101 110.79761831283568 L 0.101 110.79761831283568 L 0.101 110.79761831283568 L 0.101 87.79761831283568 Z"
                                cy="127.51666563796996"
                                cx="406.6384924411774"
                                j="2"
                                val="10"
                                barHeight="23"
                                barWidth="406.53849244117737"
                              ></path>
                              <path
                                id="SvgjsPath1122"
                                d="M 4.101 127.51666563796996 L 321.3317939529419 127.51666563796996 C 323.3317939529419 127.51666563796996 325.3317939529419 129.51666563796996 325.3317939529419 131.51666563796996 L 325.3317939529419 146.51666563796996 C 325.3317939529419 148.51666563796996 323.3317939529419 150.51666563796996 321.3317939529419 150.51666563796996 L 4.101 150.51666563796996 C 2.101 150.51666563796996 0.101 148.51666563796996 0.101 146.51666563796996 L 0.101 131.51666563796996 C 0.101 129.51666563796996 2.101 127.51666563796996 4.101 127.51666563796996 Z "
                                fill="rgba(255,199,0,0.85)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskubqnjpyvg)"
                                pathTo="M 4.101 127.51666563796996 L 321.3317939529419 127.51666563796996 C 323.3317939529419 127.51666563796996 325.3317939529419 129.51666563796996 325.3317939529419 131.51666563796996 L 325.3317939529419 146.51666563796996 C 325.3317939529419 148.51666563796996 323.3317939529419 150.51666563796996 321.3317939529419 150.51666563796996 L 4.101 150.51666563796996 C 2.101 150.51666563796996 0.101 148.51666563796996 0.101 146.51666563796996 L 0.101 131.51666563796996 C 0.101 129.51666563796996 2.101 127.51666563796996 4.101 127.51666563796996 Z "
                                pathFrom="M 0.101 127.51666563796996 L 0.101 127.51666563796996 L 0.101 150.51666563796996 L 0.101 150.51666563796996 L 0.101 150.51666563796996 L 0.101 150.51666563796996 L 0.101 150.51666563796996 L 0.101 127.51666563796996 Z"
                                cy="167.23571296310425"
                                cx="325.3307939529419"
                                j="3"
                                val="8"
                                barHeight="23"
                                barWidth="325.2307939529419"
                              ></path>
                              <path
                                id="SvgjsPath1124"
                                d="M 4.101 167.23571296310425 L 280.67794470882416 167.23571296310425 C 282.67794470882416 167.23571296310425 284.67794470882416 169.23571296310425 284.67794470882416 171.23571296310425 L 284.67794470882416 186.23571296310425 C 284.67794470882416 188.23571296310425 282.67794470882416 190.23571296310425 280.67794470882416 190.23571296310425 L 4.101 190.23571296310425 C 2.101 190.23571296310425 0.101 188.23571296310425 0.101 186.23571296310425 L 0.101 171.23571296310425 C 0.101 169.23571296310425 2.101 167.23571296310425 4.101 167.23571296310425 Z "
                                fill="rgba(114,57,234,0.85)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskubqnjpyvg)"
                                pathTo="M 4.101 167.23571296310425 L 280.67794470882416 167.23571296310425 C 282.67794470882416 167.23571296310425 284.67794470882416 169.23571296310425 284.67794470882416 171.23571296310425 L 284.67794470882416 186.23571296310425 C 284.67794470882416 188.23571296310425 282.67794470882416 190.23571296310425 280.67794470882416 190.23571296310425 L 4.101 190.23571296310425 C 2.101 190.23571296310425 0.101 188.23571296310425 0.101 186.23571296310425 L 0.101 171.23571296310425 C 0.101 169.23571296310425 2.101 167.23571296310425 4.101 167.23571296310425 Z "
                                pathFrom="M 0.101 167.23571296310425 L 0.101 167.23571296310425 L 0.101 190.23571296310425 L 0.101 190.23571296310425 L 0.101 190.23571296310425 L 0.101 190.23571296310425 L 0.101 190.23571296310425 L 0.101 167.23571296310425 Z"
                                cy="206.95476028823853"
                                cx="284.6769447088242"
                                j="4"
                                val="7"
                                barHeight="23"
                                barWidth="284.57694470882416"
                              ></path>
                              <path
                                id="SvgjsPath1126"
                                d="M 4.101 206.95476028823853 L 158.71639697647095 206.95476028823853 C 160.71639697647095 206.95476028823853 162.71639697647095 208.95476028823853 162.71639697647095 210.95476028823853 L 162.71639697647095 225.95476028823853 C 162.71639697647095 227.95476028823853 160.71639697647095 229.95476028823853 158.71639697647095 229.95476028823853 L 4.101 229.95476028823853 C 2.101 229.95476028823853 0.101 227.95476028823853 0.101 225.95476028823853 L 0.101 210.95476028823853 C 0.101 208.95476028823853 2.101 206.95476028823853 4.101 206.95476028823853 Z "
                                fill="rgba(80,205,205,0.85)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskubqnjpyvg)"
                                pathTo="M 4.101 206.95476028823853 L 158.71639697647095 206.95476028823853 C 160.71639697647095 206.95476028823853 162.71639697647095 208.95476028823853 162.71639697647095 210.95476028823853 L 162.71639697647095 225.95476028823853 C 162.71639697647095 227.95476028823853 160.71639697647095 229.95476028823853 158.71639697647095 229.95476028823853 L 4.101 229.95476028823853 C 2.101 229.95476028823853 0.101 227.95476028823853 0.101 225.95476028823853 L 0.101 210.95476028823853 C 0.101 208.95476028823853 2.101 206.95476028823853 4.101 206.95476028823853 Z "
                                pathFrom="M 0.101 206.95476028823853 L 0.101 206.95476028823853 L 0.101 229.95476028823853 L 0.101 229.95476028823853 L 0.101 229.95476028823853 L 0.101 229.95476028823853 L 0.101 229.95476028823853 L 0.101 206.95476028823853 Z"
                                cy="246.67380761337282"
                                cx="162.71539697647094"
                                j="5"
                                val="4"
                                barHeight="23"
                                barWidth="162.61539697647095"
                              ></path>
                              <path
                                id="SvgjsPath1128"
                                d="M 4.101 246.67380761337282 L 118.06254773235321 246.67380761337282 C 120.06254773235321 246.67380761337282 122.06254773235321 248.67380761337282 122.06254773235321 250.67380761337282 L 122.06254773235321 265.6738076133728 C 122.06254773235321 267.6738076133728 120.06254773235321 269.6738076133728 118.06254773235321 269.6738076133728 L 4.101 269.6738076133728 C 2.101 269.6738076133728 0.101 267.6738076133728 0.101 265.6738076133728 L 0.101 250.67380761337282 C 0.101 248.67380761337282 2.101 246.67380761337282 4.101 246.67380761337282 Z "
                                fill="rgba(63,66,84,0.85)"
                                fill-opacity="1"
                                stroke-opacity="1"
                                stroke-linecap="round"
                                stroke-width="0"
                                stroke-dasharray="0"
                                class="apexcharts-bar-area"
                                index="0"
                                clip-path="url(#gridRectMaskubqnjpyvg)"
                                pathTo="M 4.101 246.67380761337282 L 118.06254773235321 246.67380761337282 C 120.06254773235321 246.67380761337282 122.06254773235321 248.67380761337282 122.06254773235321 250.67380761337282 L 122.06254773235321 265.6738076133728 C 122.06254773235321 267.6738076133728 120.06254773235321 269.6738076133728 118.06254773235321 269.6738076133728 L 4.101 269.6738076133728 C 2.101 269.6738076133728 0.101 267.6738076133728 0.101 265.6738076133728 L 0.101 250.67380761337282 C 0.101 248.67380761337282 2.101 246.67380761337282 4.101 246.67380761337282 Z "
                                pathFrom="M 0.101 246.67380761337282 L 0.101 246.67380761337282 L 0.101 269.6738076133728 L 0.101 269.6738076133728 L 0.101 269.6738076133728 L 0.101 269.6738076133728 L 0.101 269.6738076133728 L 0.101 246.67380761337282 Z"
                                cy="286.39285493850707"
                                cx="122.0615477323532"
                                j="6"
                                val="3"
                                barHeight="23"
                                barWidth="121.96154773235321"
                              ></path>
                              <g id="SvgjsG1113" class="apexcharts-bar-goals-markers">
                                <g
                                  id="SvgjsG1115"
                                  className="apexcharts-bar-goals-groups"
                                  class="apexcharts-hidden-element-shown"
                                  clip-path="url(#gridRectMarkerMaskubqnjpyvg)"
                                ></g>
                                <g
                                  id="SvgjsG1117"
                                  className="apexcharts-bar-goals-groups"
                                  class="apexcharts-hidden-element-shown"
                                  clip-path="url(#gridRectMarkerMaskubqnjpyvg)"
                                ></g>
                                <g
                                  id="SvgjsG1119"
                                  className="apexcharts-bar-goals-groups"
                                  class="apexcharts-hidden-element-shown"
                                  clip-path="url(#gridRectMarkerMaskubqnjpyvg)"
                                ></g>
                                <g
                                  id="SvgjsG1121"
                                  className="apexcharts-bar-goals-groups"
                                  class="apexcharts-hidden-element-shown"
                                  clip-path="url(#gridRectMarkerMaskubqnjpyvg)"
                                ></g>
                                <g
                                  id="SvgjsG1123"
                                  className="apexcharts-bar-goals-groups"
                                  class="apexcharts-hidden-element-shown"
                                  clip-path="url(#gridRectMarkerMaskubqnjpyvg)"
                                ></g>
                                <g
                                  id="SvgjsG1125"
                                  className="apexcharts-bar-goals-groups"
                                  class="apexcharts-hidden-element-shown"
                                  clip-path="url(#gridRectMarkerMaskubqnjpyvg)"
                                ></g>
                                <g
                                  id="SvgjsG1127"
                                  className="apexcharts-bar-goals-groups"
                                  class="apexcharts-hidden-element-shown"
                                  clip-path="url(#gridRectMarkerMaskubqnjpyvg)"
                                ></g>
                              </g>
                              <g id="SvgjsG1114" class="apexcharts-bar-shadows apexcharts-hidden-element-shown"></g>
                            </g>
                            <g id="SvgjsG1112" class="apexcharts-datalabels apexcharts-hidden-element-shown" data:realIndex="0"></g>
                          </g>
                          <line
                            id="SvgjsLine1145"
                            x1="0"
                            y1="0"
                            x2="650.4615879058838"
                            y2="0"
                            stroke="#b6b6b6"
                            stroke-dasharray="0"
                            stroke-width="1"
                            stroke-linecap="butt"
                            class="apexcharts-ycrosshairs"
                          ></line>
                          <line
                            id="SvgjsLine1146"
                            x1="0"
                            y1="0"
                            x2="650.4615879058838"
                            y2="0"
                            stroke-dasharray="0"
                            stroke-width="0"
                            stroke-linecap="butt"
                            class="apexcharts-ycrosshairs-hidden"
                          ></line>
                          <g id="SvgjsG1164" class="apexcharts-yaxis apexcharts-xaxis-inversed" rel="0">
                            <g
                              id="SvgjsG1165"
                              class="apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g"
                              transform="translate(-81.3720703125, 0)"
                            >
                              <text
                                id="SvgjsText1167"
                                font-family="Helvetica, Arial, sans-serif"
                                x="0"
                                y="23.664934904618697"
                                text-anchor="start"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#252f4a"
                                class="apexcharts-text apexcharts-yaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1168">Phones</tspan>
                                <title>Phones</title>
                              </text>
                              <text
                                id="SvgjsText1170"
                                font-family="Helvetica, Arial, sans-serif"
                                x="0"
                                y="63.383982229752974"
                                text-anchor="start"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#252f4a"
                                class="apexcharts-text apexcharts-yaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1171">Laptops</tspan>
                                <title>Laptops</title>
                              </text>
                              <text
                                id="SvgjsText1173"
                                font-family="Helvetica, Arial, sans-serif"
                                x="0"
                                y="103.10302955488726"
                                text-anchor="start"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#252f4a"
                                class="apexcharts-text apexcharts-yaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1174">Headsets</tspan>
                                <title>Headsets</title>
                              </text>
                              <text
                                id="SvgjsText1176"
                                font-family="Helvetica, Arial, sans-serif"
                                x="0"
                                y="142.82207688002154"
                                text-anchor="start"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#252f4a"
                                class="apexcharts-text apexcharts-yaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1177">Games</tspan>
                                <title>Games</title>
                              </text>
                              <text
                                id="SvgjsText1179"
                                font-family="Helvetica, Arial, sans-serif"
                                x="0"
                                y="182.54112420515582"
                                text-anchor="start"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#252f4a"
                                class="apexcharts-text apexcharts-yaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1180">Keyboardsy</tspan>
                                <title>Keyboardsy</title>
                              </text>
                              <text
                                id="SvgjsText1182"
                                font-family="Helvetica, Arial, sans-serif"
                                x="0"
                                y="222.2601715302901"
                                text-anchor="start"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#252f4a"
                                class="apexcharts-text apexcharts-yaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1183">Monitors</tspan>
                                <title>Monitors</title>
                              </text>
                              <text
                                id="SvgjsText1185"
                                font-family="Helvetica, Arial, sans-serif"
                                x="0"
                                y="261.9792188554244"
                                text-anchor="start"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#252f4a"
                                class="apexcharts-text apexcharts-yaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1186">Speakers</tspan>
                                <title>Speakers</title>
                              </text>
                            </g>
                          </g>
                          <g id="SvgjsG1147" class="apexcharts-xaxis apexcharts-yaxis-inversed">
                            <g id="SvgjsG1148" class="apexcharts-xaxis-texts-g" transform="translate(0, -9.333333333333334)">
                              <text
                                id="SvgjsText1149"
                                font-family="Helvetica, Arial, sans-serif"
                                x="650.4615879058838"
                                y="308.03333127593993"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#c4cada"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1151">16K</tspan>
                                <title>16K</title>
                              </text>
                              <text
                                id="SvgjsText1152"
                                font-family="Helvetica, Arial, sans-serif"
                                x="487.7461909294128"
                                y="308.03333127593993"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#c4cada"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1154">12K</tspan>
                                <title>12K</title>
                              </text>
                              <text
                                id="SvgjsText1155"
                                font-family="Helvetica, Arial, sans-serif"
                                x="325.03079395294196"
                                y="308.03333127593993"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#c4cada"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1157">8K</tspan>
                                <title>8K</title>
                              </text>
                              <text
                                id="SvgjsText1158"
                                font-family="Helvetica, Arial, sans-serif"
                                x="162.315396976471"
                                y="308.03333127593993"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#c4cada"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1160">4K</tspan>
                                <title>4K</title>
                              </text>
                              <text
                                id="SvgjsText1161"
                                font-family="Helvetica, Arial, sans-serif"
                                x="-0.39999999999997726"
                                y="308.03333127593993"
                                text-anchor="middle"
                                dominant-baseline="auto"
                                font-size="14px"
                                font-weight="600"
                                fill="#c4cada"
                                class="apexcharts-text apexcharts-xaxis-label"
                                style="font-family: Helvetica, Arial, sans-serif"
                              >
                                <tspan id="SvgjsTspan1163">0K</tspan>
                                <title>0K</title>
                              </text>
                            </g>
                          </g>
                          <g id="SvgjsG1187" class="apexcharts-yaxis-annotations"></g>
                          <g id="SvgjsG1188" class="apexcharts-xaxis-annotations"></g>
                          <g id="SvgjsG1189" class="apexcharts-point-annotations"></g>
                        </g>
                      </svg>
                      <div class="apexcharts-tooltip apexcharts-theme-light" style="left: 511.643px; top: 60.1143px">
                        <div class="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px">Headsets</div>
                        <div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex">
                          <span class="apexcharts-tooltip-marker" style="background-color: rgba(80, 205, 137, 0.85)"></span>
                          <div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px">
                            <div class="apexcharts-tooltip-y-group">
                              <span class="apexcharts-tooltip-text-y-label">series-1: </span><span class="apexcharts-tooltip-text-y-value">10</span>
                            </div>
                            <div class="apexcharts-tooltip-goals-group">
                              <span class="apexcharts-tooltip-text-goals-label"></span><span class="apexcharts-tooltip-text-goals-value"></span>
                            </div>
                            <div class="apexcharts-tooltip-z-group">
                              <span class="apexcharts-tooltip-text-z-label"></span><span class="apexcharts-tooltip-text-z-value"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                        <div class="apexcharts-yaxistooltip-text"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end::Body-->
              </div>
              <!--end::Chart widget 5-->
            </div>
            <!--end::Col-->
            <!--begin::Col-->
            <div class="col-xl-4 mb-5 mb-xl-10">
              <!--begin::Engage widget 1-->
              <div class="card h-md-100" dir="ltr">
                <!--begin::Body-->
                <div class="card-body d-flex flex-column flex-center">
                  <!--begin::Heading-->
                  <div class="mb-2">
                    <!--begin::Title-->
                    <h1 class="fw-semibold text-gray-800 text-center lh-lg">
                      Have you tried <br />new <span class="fw-bolder">Mobile Application ?</span>
                    </h1>
                    <!--end::Title-->
                    <!--begin::Illustration-->
                    <div class="py-10 text-center">
                      <img src="../../public/assets/media/svg/illustrations/easy/1.svg" class="theme-light-show w-200px" alt="" />
                      <img src="../../public/assets/media/svg/illustrations/easy/1-dark.svg" class="theme-dark-show w-200px" alt="" />
                    </div>
                    <!--end::Illustration-->
                  </div>
                  <!--end::Heading-->
                  <!--begin::Links-->
                  <div class="text-center mb-1">
                    <!--begin::Link-->
                    <a class="btn btn-sm btn-primary me-2" data-bs-target="#kt_modal_create_app" data-bs-toggle="modal">Try now</a>
                    <!--end::Link-->
                    <!--begin::Link-->
                    <a class="btn btn-sm btn-light" href="apps/invoices/view/invoice-1.html">Learn more</a>
                    <!--end::Link-->
                  </div>
                  <!--end::Links-->
                </div>
                <!--end::Body-->
              </div>
              <!--end::Engage widget 1-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Row-->
          <!--begin::Row-->
          <div class="row gy-5 g-xl-10">
            <!--begin::Col-->
            <div class="col-xl-4">
              <!--begin::List widget 5-->
              <div class="card card-flush h-xl-100">
                <!--begin::Header-->
                <div class="card-header pt-7">
                  <!--begin::Title-->
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bold text-gray-900">Product Delivery</span>
                    <span class="text-gray-500 mt-1 fw-semibold fs-6">1M Products Shipped so far</span>
                  </h3>
                  <!--end::Title-->
                  <!--begin::Toolbar-->
                  <div class="card-toolbar">
                    <a href="apps/ecommerce/sales/details.html" class="btn btn-sm btn-light">Order Details</a>
                  </div>
                  <!--end::Toolbar-->
                </div>
                <!--end::Header-->
                <!--begin::Body-->
                <div class="card-body">
                  <!--begin::Scroll-->
                  <div class="hover-scroll-overlay-y pe-6 me-n6" style="height: 415px">
                    <!--begin::Item-->

                    <div class="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                      <!--begin::Info-->
                      <div class="d-flex flex-stack mb-3">
                        <!--begin::Wrapper-->
                        <div class="me-3">
                          <!--begin::Icon-->
                          <img src="../../public/assets/media/stock/ecommerce/211.png" class="w-50px ms-n1 me-1" alt="" />
                          <!--end::Icon-->
                          <!--begin::Title-->
                          <a href="apps/ecommerce/catalog/edit-product.html" class="text-gray-800 text-hover-primary fw-bold">Elephant 1802</a>
                          <!--end::Title-->
                        </div>
                        <!--end::Wrapper-->
                        <!--begin::Action-->
                        <div class="m-0">
                          <!--begin::Menu-->
                          <button
                            class="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-overflow="true"
                          >
                            <i class="ki-duotone ki-dots-square fs-1">
                              <span class="path1"></span>
                              <span class="path2"></span>
                              <span class="path3"></span>
                              <span class="path4"></span>
                            </i>
                          </button>
                          <!--begin::Menu 2-->
                          <div
                            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                            data-kt-menu="true"
                          >
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <div class="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu separator-->
                            <div class="separator mb-3 opacity-75"></div>
                            <!--end::Menu separator-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <a href="#" class="menu-link px-3">New Ticket</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <a href="#" class="menu-link px-3">New Customer</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                              <!--begin::Menu item-->
                              <a href="#" class="menu-link px-3">
                                <span class="menu-title">New Group</span>
                                <span class="menu-arrow"></span>
                              </a>
                              <!--end::Menu item-->
                              <!--begin::Menu sub-->
                              <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">Admin Group</a>
                                </div>
                                <!--end::Menu item-->
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">Staff Group</a>
                                </div>
                                <!--end::Menu item-->
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">Member Group</a>
                                </div>
                                <!--end::Menu item-->
                              </div>
                              <!--end::Menu sub-->
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <a href="#" class="menu-link px-3">New Contact</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu separator-->
                            <div class="separator mt-3 opacity-75"></div>
                            <!--end::Menu separator-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <div class="menu-content px-3 py-3">
                                <a class="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                              </div>
                            </div>
                            <!--end::Menu item-->
                          </div>
                          <!--end::Menu 2-->
                          <!--end::Menu-->
                        </div>
                        <!--end::Action-->
                      </div>
                      <!--end::Info-->
                      <!--begin::Customer-->
                      <div class="d-flex flex-stack">
                        <!--begin::Name-->
                        <span class="text-gray-500 fw-bold"
                          >To: <a href="apps/ecommerce/sales/details.html" class="text-gray-800 text-hover-primary fw-bold">Lebron Wayde</a></span
                        >
                        <!--end::Name-->
                        <!--begin::Label-->
                        <span class="badge badge-light-success">Delivered</span>
                        <!--end::Label-->
                      </div>
                      <!--end::Customer-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="border border-dashed border-gray-300 rounded px-7 py-3 mb-6">
                      <!--begin::Info-->
                      <div class="d-flex flex-stack mb-3">
                        <!--begin::Wrapper-->
                        <div class="me-3">
                          <!--begin::Icon-->
                          <img src="../../public/assets/media/stock/ecommerce/215.png" class="w-50px ms-n1 me-1" alt="" />
                          <!--end::Icon-->
                          <!--begin::Title-->
                          <a href="apps/ecommerce/catalog/edit-product.html" class="text-gray-800 text-hover-primary fw-bold">RiseUP</a>
                          <!--end::Title-->
                        </div>
                        <!--end::Wrapper-->
                        <!--begin::Action-->
                        <div class="m-0">
                          <!--begin::Menu-->
                          <button
                            class="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-overflow="true"
                          >
                            <i class="ki-duotone ki-dots-square fs-1">
                              <span class="path1"></span>
                              <span class="path2"></span>
                              <span class="path3"></span>
                              <span class="path4"></span>
                            </i>
                          </button>
                          <!--begin::Menu 2-->
                          <div
                            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                            data-kt-menu="true"
                          >
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <div class="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu separator-->
                            <div class="separator mb-3 opacity-75"></div>
                            <!--end::Menu separator-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <a href="#" class="menu-link px-3">New Ticket</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <a href="#" class="menu-link px-3">New Customer</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                              <!--begin::Menu item-->
                              <a href="#" class="menu-link px-3">
                                <span class="menu-title">New Group</span>
                                <span class="menu-arrow"></span>
                              </a>
                              <!--end::Menu item-->
                              <!--begin::Menu sub-->
                              <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">Admin Group</a>
                                </div>
                                <!--end::Menu item-->
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">Staff Group</a>
                                </div>
                                <!--end::Menu item-->
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">Member Group</a>
                                </div>
                                <!--end::Menu item-->
                              </div>
                              <!--end::Menu sub-->
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <a href="#" class="menu-link px-3">New Contact</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu separator-->
                            <div class="separator mt-3 opacity-75"></div>
                            <!--end::Menu separator-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <div class="menu-content px-3 py-3">
                                <a class="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                              </div>
                            </div>
                            <!--end::Menu item-->
                          </div>
                          <!--end::Menu 2-->
                          <!--end::Menu-->
                        </div>
                        <!--end::Action-->
                      </div>
                      <!--end::Info-->
                      <!--begin::Customer-->
                      <div class="d-flex flex-stack">
                        <!--begin::Name-->
                        <span class="text-gray-500 fw-bold"
                          >To: <a href="apps/ecommerce/sales/details.html" class="text-gray-800 text-hover-primary fw-bold">Ana Simmons</a></span
                        >
                        <!--end::Name-->
                        <!--begin::Label-->
                        <span class="badge badge-light-primary">Shipping</span>
                        <!--end::Label-->
                      </div>
                      <!--end::Customer-->
                    </div>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <div class="border border-dashed border-gray-300 rounded px-7 py-3">
                      <!--begin::Info-->
                      <div class="d-flex flex-stack mb-3">
                        <!--begin::Wrapper-->
                        <div class="me-3">
                          <!--begin::Icon-->
                          <img src="../../public/assets/media/stock/ecommerce/192.png" class="w-50px ms-n1 me-1" alt="" />
                          <!--end::Icon-->
                          <!--begin::Title-->
                          <a href="apps/ecommerce/catalog/edit-product.html" class="text-gray-800 text-hover-primary fw-bold">Yellow Stone</a>
                          <!--end::Title-->
                        </div>
                        <!--end::Wrapper-->
                        <!--begin::Action-->
                        <div class="m-0">
                          <!--begin::Menu-->
                          <button
                            class="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-overflow="true"
                          >
                            <i class="ki-duotone ki-dots-square fs-1">
                              <span class="path1"></span>
                              <span class="path2"></span>
                              <span class="path3"></span>
                              <span class="path4"></span>
                            </i>
                          </button>
                          <!--begin::Menu 2-->
                          <div
                            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                            data-kt-menu="true"
                          >
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <div class="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Quick Actions</div>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu separator-->
                            <div class="separator mb-3 opacity-75"></div>
                            <!--end::Menu separator-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <a href="#" class="menu-link px-3">New Ticket</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <a href="#" class="menu-link px-3">New Customer</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                              <!--begin::Menu item-->
                              <a href="#" class="menu-link px-3">
                                <span class="menu-title">New Group</span>
                                <span class="menu-arrow"></span>
                              </a>
                              <!--end::Menu item-->
                              <!--begin::Menu sub-->
                              <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">Admin Group</a>
                                </div>
                                <!--end::Menu item-->
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">Staff Group</a>
                                </div>
                                <!--end::Menu item-->
                                <!--begin::Menu item-->
                                <div class="menu-item px-3">
                                  <a href="#" class="menu-link px-3">Member Group</a>
                                </div>
                                <!--end::Menu item-->
                              </div>
                              <!--end::Menu sub-->
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <a href="#" class="menu-link px-3">New Contact</a>
                            </div>
                            <!--end::Menu item-->
                            <!--begin::Menu separator-->
                            <div class="separator mt-3 opacity-75"></div>
                            <!--end::Menu separator-->
                            <!--begin::Menu item-->
                            <div class="menu-item px-3">
                              <div class="menu-content px-3 py-3">
                                <a class="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                              </div>
                            </div>
                            <!--end::Menu item-->
                          </div>
                          <!--end::Menu 2-->
                          <!--end::Menu-->
                        </div>
                        <!--end::Action-->
                      </div>
                      <!--end::Info-->
                      <!--begin::Customer-->
                      <div class="d-flex flex-stack">
                        <!--begin::Name-->
                        <span class="text-gray-500 fw-bold"
                          >To: <a href="apps/ecommerce/sales/details.html" class="text-gray-800 text-hover-primary fw-bold">Kevin Leonard</a></span
                        >
                        <!--end::Name-->
                        <!--begin::Label-->
                        <span class="badge badge-light-danger">Confirmed</span>
                        <!--end::Label-->
                      </div>
                      <!--end::Customer-->
                    </div>
                    <!--end::Item-->
                  </div>
                  <!--end::Scroll-->
                </div>
                <!--end::Body-->
              </div>
              <!--end::List widget 5-->
            </div>
            <!--end::Col-->
            <!--begin::Col-->
            <div class="col-xl-8">
              <!--begin::Table Widget 5-->
              <div class="card card-flush h-xl-100">
                <!--begin::Card header-->
                <div class="card-header pt-7">
                  <!--begin::Title-->
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bold text-gray-900">Stock Report</span>
                    <span class="text-gray-500 mt-1 fw-semibold fs-6">Total 2,356 Items in the Stock</span>
                  </h3>
                  <!--end::Title-->
                  <!--begin::Actions-->
                  <div class="card-toolbar">
                    <!--begin::Filters-->
                    <div class="d-flex flex-stack flex-wrap gap-4">
                      <!--begin::Destination-->
                      <div class="d-flex align-items-center fw-bold">
                        <!--begin::Label-->
                        <div class="text-muted fs-7 me-2">Cateogry</div>
                        <!--end::Label-->
                        <!--begin::Select-->
                        <select
                          class="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible"
                          data-control="select2"
                          data-hide-search="true"
                          data-dropdown-css-class="w-150px"
                          data-placeholder="Select an option"
                          data-select2-id="select2-data-9-l9hj"
                          tabindex="-1"
                          aria-hidden="true"
                          data-kt-initialized="1"
                        >
                          <option></option>
                          <option value="Show All" selected="selected" data-select2-id="select2-data-11-kgk0">Show All</option>
                          <option value="a">Category A</option>
                          <option value="b">Category B</option></select
                        ><span
                          class="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-10-ebe5"
                          style="width: 100%"
                          ><span class="selection"
                            ><span
                              class="select2-selection select2-selection--single form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="0"
                              aria-disabled="false"
                              aria-labelledby="select2-nxer-container"
                              aria-controls="select2-nxer-container"
                              ><span
                                class="select2-selection__rendered"
                                id="select2-nxer-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Show All"
                                >Show All</span
                              ><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span
                          ><span class="dropdown-wrapper" aria-hidden="true"></span
                        ></span>
                        <!--end::Select-->
                      </div>
                      <!--end::Destination-->
                      <!--begin::Status-->
                      <div class="d-flex align-items-center fw-bold">
                        <!--begin::Label-->
                        <div class="text-muted fs-7 me-2">Status</div>
                        <!--end::Label-->
                        <!--begin::Select-->
                        <select
                          class="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto select2-hidden-accessible"
                          data-control="select2"
                          data-hide-search="true"
                          data-dropdown-css-class="w-150px"
                          data-placeholder="Select an option"
                          data-kt-table-widget-5="filter_status"
                          data-select2-id="select2-data-12-glio"
                          tabindex="-1"
                          aria-hidden="true"
                          data-kt-initialized="1"
                        >
                          <option></option>
                          <option value="Show All" selected="selected" data-select2-id="select2-data-14-hccp">Show All</option>
                          <option value="In Stock">In Stock</option>
                          <option value="Out of Stock">Out of Stock</option>
                          <option value="Low Stock">Low Stock</option></select
                        ><span
                          class="select2 select2-container select2-container--bootstrap5"
                          dir="ltr"
                          data-select2-id="select2-data-13-kz09"
                          style="width: 100%"
                          ><span class="selection"
                            ><span
                              class="select2-selection select2-selection--single form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="0"
                              aria-disabled="false"
                              aria-labelledby="select2-j011-container"
                              aria-controls="select2-j011-container"
                              ><span
                                class="select2-selection__rendered"
                                id="select2-j011-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Show All"
                                >Show All</span
                              ><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span
                          ><span class="dropdown-wrapper" aria-hidden="true"></span
                        ></span>
                        <!--end::Select-->
                      </div>
                      <!--end::Status-->
                      <!--begin::Search-->
                      <a href="apps/ecommerce/catalog/products.html" class="btn btn-light btn-sm">View Stock</a>
                      <!--end::Search-->
                    </div>
                    <!--begin::Filters-->
                  </div>
                  <!--end::Actions-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body">
                  <!--begin::Table-->
                  <div id="kt_table_widget_5_table_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                    <div class="table-responsive">
                      <table class="table align-middle table-row-dashed fs-6 gy-3 dataTable no-footer" id="kt_table_widget_5_table">
                        <!--begin::Table head-->
                        <thead>
                          <!--begin::Table row-->
                          <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                            <th
                              class="min-w-150px sorting"
                              tabindex="0"
                              aria-controls="kt_table_widget_5_table"
                              rowspan="1"
                              colspan="1"
                              aria-label="Item: activate to sort column ascending"
                              style="width: 150px"
                            >
                              Item
                            </th>
                            <th
                              class="text-end pe-3 min-w-100px sorting_disabled"
                              rowspan="1"
                              colspan="1"
                              aria-label="Product ID"
                              style="width: 100px"
                            >
                              Product ID
                            </th>
                            <th
                              class="text-end pe-3 min-w-150px sorting"
                              tabindex="0"
                              aria-controls="kt_table_widget_5_table"
                              rowspan="1"
                              colspan="1"
                              aria-label="Date Added: activate to sort column ascending"
                              style="width: 150px"
                            >
                              Date Added
                            </th>
                            <th
                              class="text-end pe-3 min-w-100px sorting"
                              tabindex="0"
                              aria-controls="kt_table_widget_5_table"
                              rowspan="1"
                              colspan="1"
                              aria-label="Price: activate to sort column ascending"
                              style="width: 100px"
                            >
                              Price
                            </th>
                            <th
                              class="text-end pe-3 min-w-100px sorting"
                              tabindex="0"
                              aria-controls="kt_table_widget_5_table"
                              rowspan="1"
                              colspan="1"
                              aria-label="Status: activate to sort column ascending"
                              style="width: 100px"
                            >
                              Status
                            </th>
                            <th
                              class="text-end pe-0 min-w-75px sorting"
                              tabindex="0"
                              aria-controls="kt_table_widget_5_table"
                              rowspan="1"
                              colspan="1"
                              aria-label="Qty: activate to sort column ascending"
                              style="width: 75px"
                            >
                              Qty
                            </th>
                          </tr>
                          <!--end::Table row-->
                        </thead>
                        <!--end::Table head-->
                        <!--begin::Table body-->
                        <tbody class="fw-bold text-gray-600">
                          <tr class="odd">
                            <!--begin::Item-->
                            <td>
                              <a href="apps/ecommerce/catalog/edit-product.html" class="text-gray-900 text-hover-primary">Macbook Air M1</a>
                            </td>
                            <!--end::Item-->
                            <!--begin::Product ID-->
                            <td class="text-end">#XGY-356</td>
                            <!--end::Product ID-->
                            <!--begin::Date added-->
                            <td class="text-end" data-order="2024-04-20T00:00:00+09:00">02 Apr, 2024</td>
                            <!--end::Date added-->
                            <!--begin::Price-->
                            <td class="text-end">$1,230</td>
                            <!--end::Price-->
                            <!--begin::Status-->
                            <td class="text-end">
                              <span class="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                            </td>
                            <!--end::Status-->
                            <!--begin::Qty-->
                            <td class="text-end" data-order="58">
                              <span class="text-gray-900 fw-bold">58 PCS</span>
                            </td>
                            <!--end::Qty-->
                          </tr>
                          <tr class="even">
                            <!--begin::Item-->
                            <td>
                              <a href="apps/ecommerce/catalog/edit-product.html" class="text-gray-900 text-hover-primary">Dell 32 UltraSharp</a>
                            </td>
                            <!--end::Item-->
                            <!--begin::Product ID-->
                            <td class="text-end">#XGY-356</td>
                            <!--end::Product ID-->
                            <!--begin::Date added-->
                            <td class="text-end" data-order="2024-12-20T00:00:00+09:00">22 Dec, 2024</td>
                            <!--end::Date added-->
                            <!--begin::Price-->
                            <td class="text-end">$1,060</td>
                            <!--end::Price-->
                            <!--begin::Status-->
                            <td class="text-end">
                              <span class="badge py-3 px-4 fs-7 badge-light-warning">Low Stock</span>
                            </td>
                            <!--end::Status-->
                            <!--begin::Qty-->
                            <td class="text-end" data-order="8">
                              <span class="text-gray-900 fw-bold">8 PCS</span>
                            </td>
                            <!--end::Qty-->
                          </tr>
                          <tr class="odd">
                            <!--begin::Item-->
                            <td>
                              <a href="apps/ecommerce/catalog/edit-product.html" class="text-gray-900 text-hover-primary">Google Pixel 6 Pro</a>
                            </td>
                            <!--end::Item-->
                            <!--begin::Product ID-->
                            <td class="text-end">#XVR-425</td>
                            <!--end::Product ID-->
                            <!--begin::Date added-->
                            <td class="text-end" data-order="2024-12-20T00:00:00+09:00">27 Dec, 2024</td>
                            <!--end::Date added-->
                            <!--begin::Price-->
                            <td class="text-end">$1,060</td>
                            <!--end::Price-->
                            <!--begin::Status-->
                            <td class="text-end">
                              <span class="badge py-3 px-4 fs-7 badge-light-primary">In Stock</span>
                            </td>
                            <!--end::Status-->
                            <!--begin::Qty-->
                            <td class="text-end" data-order="124">
                              <span class="text-gray-900 fw-bold">124 PCS</span>
                            </td>
                            <!--end::Qty-->
                          </tr>
                        </tbody>
                        <!--end::Table body-->
                      </table>
                    </div>
                    <div class="row">
                      <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                      <div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end"></div>
                    </div>
                  </div>
                  <!--end::Table-->
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Table Widget 5-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Row-->
        </div>
        <!--end::Content container-->
      </div>
      <!--end::Content-->
    </div>
    <!--end::Content wrapper-->
    <!--begin::Footer-->
    <div id="kt_app_footer" class="app-footer">
      <!--begin::Footer container-->
      <div class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
        <!--begin::Copyright-->
        <div class="text-gray-900 order-2 order-md-1">
          <span class="text-muted fw-semibold me-1">2024©</span>
          <a href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</a>
        </div>
        <!--end::Copyright-->
        <!--begin::Menu-->
        <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li class="menu-item">
            <a href="https://keenthemes.com" target="_blank" class="menu-link px-2">About</a>
          </li>
          <li class="menu-item">
            <a href="https://devs.keenthemes.com" target="_blank" class="menu-link px-2">Support</a>
          </li>
          <li class="menu-item">
            <a href="https://1.envato.market/EA4JP" target="_blank" class="menu-link px-2">Purchase</a>
          </li>
        </ul>
        <!--end::Menu-->
      </div>
      <!--end::Footer container-->
    </div>
    <!--end::Footer-->
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
