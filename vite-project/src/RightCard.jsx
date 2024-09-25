import React from "react";

function RightCard() {
  return (
    <div className="col-lg-4">
    <div className="card text-left">
      <div className="card-body">
       <div className='text-center'>
        <div className='fw-light'>PRO</div>
        <div className='fs-1'><b>$49/month</b></div>
        </div>
        <hr />
        <div className='fw-semibold'><i class="fa fa-check" aria-hidden="true"></i> Single User</div>
        <br />
        <div className='fw-semibold'><i class="fa fa-check" aria-hidden="true"></i> 50GB Storage</div>
        <br />
        <div className='fw-semibold'><i class="fa fa-check" aria-hidden="true"></i> Unlimited Public Projects</div>
        <br />
        <div className='fw-semibold'><i class="fa fa-check" aria-hidden="true"></i> Community Access</div>
        <br />
        <div className='fw-semibold'><i class="fa fa-check" aria-hidden="true"></i> Unlimited Private Projects</div>
        <br />
        <div className='fw-semibold'><i class="fa fa-check" aria-hidden="true"></i> Dedicated Phone Support</div>
        <br />
        <div className='fw-semibold'><i class="fa fa-check" aria-hidden="true"></i> Free Subdomain</div>
        <br />
        <div className='fw-semibold'><i class="fa fa-check" aria-hidden="true"></i> Monthly Status Reports</div>
        <br />
        <button className="btn btn-primary">Button</button>
      </div>
    </div>
  </div>
  );
}

export default RightCard;