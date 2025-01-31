<template>
  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <div class="card-header cursor-pointer">
      <div class="card-title m-0"><h3 class="fw-bold m-0">Profile Details</h3></div>
      <a href="account/settings.html" class="btn btn-sm btn-primary align-self-center">Edit Profile</a>
    </div>
    <div class="card-body p-9">
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted">Full Name</label>
        <div class="col-lg-8"><span class="fw-bold fs-6 text-gray-800">Max Smith</span></div>
      </div>
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted">Company</label>
        <div class="col-lg-8 fv-row"><span class="fw-semibold text-gray-800 fs-6">Keenthemes</span></div>
      </div>
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted"
          >Contact Phone
          <span
            class="ms-1"
            data-bs-toggle="tooltip"
            aria-label="Phone number must be active"
            data-bs-original-title="Phone number must be active"
            data-kt-initialized="1"
            ><i class="ki-duotone ki-information fs-7"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i></span
        ></label>
        <div class="col-lg-8 d-flex align-items-center">
          <span class="fw-bold fs-6 text-gray-800 me-2">044 3276 454 935</span><span class="badge badge-success">Verified</span>
        </div>
      </div>
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted">Company Site</label>
        <div class="col-lg-8"><a href="#" class="fw-semibold fs-6 text-gray-800 text-hover-primary">keenthemes.com</a></div>
      </div>
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted"
          >Country
          <span
            class="ms-1"
            data-bs-toggle="tooltip"
            aria-label="Country of origination"
            data-bs-original-title="Country of origination"
            data-kt-initialized="1"
            ><i class="ki-duotone ki-information fs-7"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i></span
        ></label>
        <div class="col-lg-8"><span class="fw-bold fs-6 text-gray-800">Germany</span></div>
      </div>
      <div class="row mb-7">
        <label class="col-lg-4 fw-semibold text-muted">Communication</label>
        <div class="col-lg-8"><span class="fw-bold fs-6 text-gray-800">Email, Phone</span></div>
      </div>
      <div class="row mb-10">
        <label class="col-lg-4 fw-semibold text-muted">Allow Changes</label>
        <div class="col-lg-8"><span class="fw-semibold fs-6 text-gray-800">Yes</span></div>
      </div>
    </div>
  </div>
</template>
