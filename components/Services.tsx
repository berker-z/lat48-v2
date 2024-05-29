import React from "react";
import DashedLine from "./DashedLine";

const Services = () => {
  return (
    <div className="text-xl">
      <div className="  mx-auto grid grid-cols-3 sm:grid-cols-1 gap-5 ">
        <div className="border-dashed border p-4 hover:border-solid rounded-md">
          <h3 className=" font-bold text-2xl">Strategic Consulting</h3>
          <p>Market Entry Strategy</p>
          <p>Business Model Design and Innovation</p>
        </div>
        <div className="border-dashed border p-4 hover:border-solid rounded-md">
          <h3 className=" font-bold text-2xl">Marketing & Branding</h3>
          <p>Go-To-Market Strategies</p>
          <p>Community Building and Management</p>
        </div>

        <div className="border-dashed border p-4 hover:border-solid rounded-md">
          <h3 className=" font-bold text-2xl">Technical Advisory</h3>
          <p>Decentralized Application Development</p>
          <p>Smart Contract Development and Audit</p>
        </div>
        <div className="border-dashed border p-4 hover:border-solid rounded-md">
          <h3 className=" font-bold text-2xl">
            Investor & Capital Acquisition
          </h3>
          <p>Pitch Deck Preparation and Review</p>
          <p>Investor Matching</p>
        </div>
        <div className="border-dashed border p-4 hover:border-solid rounded-md">
          <h3 className=" font-bold text-2xl">Partnership Development</h3>
          <p>Strategic Partnerships</p>
          <p>Business Development</p>
        </div>
        <div className="border-dashed border p-4 hover:border-solid rounded-md">
          <h3 className=" font-bold text-2xl">
            Operations & Project Management
          </h3>
          <p>Project Scaling Strategies</p>
          <p>Resource Planning and Management</p>
        </div>
      </div>

      <DashedLine orientation="vertical" className="mt-20 mx-auto" />
    </div>
  );
};

export default Services;
