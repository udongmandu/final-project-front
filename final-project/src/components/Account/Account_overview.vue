<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body pt-9 pb-0">
      <div class="d-flex flex-wrap flex-sm-nowrap">
        <div class="me-7 mb-4">
          <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
            <img :src="userData.profileImage" alt="Profile Image" />
            <div
              class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"
            ></div>
          </div>
        </div>
        <div class="flex-grow-1">
          <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
            <div class="d-flex flex-column">
              <div class="d-flex align-items-center mb-2">
                <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bold me-1">{{ userData.name }}</a>
                <a href="#">
                  <i class="ki-duotone ki-verify fs-1 text-primary">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                </a>
              </div>
              <div class="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                  <i class="ki-duotone ki-profile-circle fs-4 me-1">
                    <span class="path1"></span>
                    <span class="path2"></span>
                    <span class="path3"></span>
                  </i>
                  {{ userData.role }}
                </a>
                <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                  <i class="ki-duotone ki-geolocation fs-4 me-1">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  {{ userData.car }}
                </a>
                <a href="#" class="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
                  <i class="ki-duotone ki-sms fs-4">
                    <span class="path1"></span>
                    <span class="path2"></span>
                  </i>
                  {{ userData.email }}
                </a>
              </div>
            </div>
            <div class="d-flex my-4">
              <a href="#" class="btn btn-sm btn-light me-2" id="kt_user_follow_button">
                <i class="ki-duotone ki-check fs-3 d-none"></i>
                <span class="indicator-label">Follow</span>
                <span class="indicator-progress"> Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span> </span>
              </a>
              <a href="#" class="btn btn-sm btn-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>
              <div class="me-0">
                <button
                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i class="ki-solid ki-dots-horizontal fs-2x"></i>
                </button>
                <div
                  class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                  data-kt-menu="true"
                >
                  <div class="menu-item px-3">
                    <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                  </div>
                  <div class="menu-item px-3"><a href="#" class="menu-link px-3">Create Invoice</a></div>
                  <div class="menu-item px-3">
                    <a href="#" class="menu-link flex-stack px-3">
                      Create Payment
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
                        </i>
                      </span>
                    </a>
                  </div>
                  <div class="menu-item px-3"><a href="#" class="menu-link px-3">Generate Bill</a></div>
                  <div class="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                    <a href="#" class="menu-link px-3">
                      <span class="menu-title">Subscription</span>
                      <span class="menu-arrow"></span>
                    </a>
                    <div class="menu-sub menu-sub-dropdown w-175px py-4">
                      <div class="menu-item px-3"><a href="#" class="menu-link px-3">Plans</a></div>
                      <div class="menu-item px-3"><a href="#" class="menu-link px-3">Billing</a></div>
                      <div class="menu-item px-3"><a href="#" class="menu-link px-3">Statements</a></div>
                      <div class="separator my-2"></div>
                      <div class="menu-item px-3">
                        <div class="menu-content px-3">
                          <label class="form-check form-switch form-check-custom form-check-solid">
                            <input class="form-check-input w-30px h-20px" type="checkbox" checked="" name="notifications" value="1" />
                            <span class="form-check-label text-muted fs-6">Recuring</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item px-3 my-1"><a href="#" class="menu-link px-3">Settings</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap flex-stack">
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <div class="d-flex flex-wrap">
                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
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
                  <div class="fw-semibold fs-6 text-gray-500">Earnings</div>
                </div>
                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                  <div class="d-flex align-items-center">
                    <i class="ki-duotone ki-arrow-down fs-3 text-danger me-2">
                      <span class="path1"></span>
                      <span class="path2"></span>
                    </i>
                    <div class="fs-2 fw-bold counted" data-kt-countup="true" data-kt-countup-value="80" data-kt-initialized="1">80</div>
                  </div>
                  <div class="fw-semibold fs-6 text-gray-500">Projects</div>
                </div>
                <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
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
                  <div class="fw-semibold fs-6 text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>
            <div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
              <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                <span class="fw-semibold fs-6 text-gray-500">Profile Completion</span>
                <span class="fw-bold fs-6">50%</span>
              </div>
              <div class="h-5px mx-3 w-100 bg-light mb-3">
                <div
                  class="bg-success rounded h-5px"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 50%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
        <li class="nav-item mt-2">
          <a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="account/overview.html">Overview</a>
        </li>
        <li class="nav-item mt-2">
          <a class="nav-link text-active-primary ms-0 me-10 py-5" href="account/settings.html">Settings</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account_overview",
  props: {
    userData: {
      type: Object,
      required: true,
      default: () => ({
        password: "password123",
        car: "Tesla Model S",
        email: "user@example.com",
        phone: "123-456-7890",
        name: "고범준",
        role: "Developer",
        profileImage: "../../../public/assets/media/avatars/300-1.jpg",
      }),
    },
  },
};
</script>
