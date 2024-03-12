"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "@/components/AnyReactComponent/LocationMarker";
import Label from "@/components/Label";
import GoogleMapReact from "google-map-react";
import React, { FC } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "./FormItem";
import ButtonPrimary from "@/shared/ButtonPrimary";


export interface PageAddListing2Props {}

const PageAddListing2: FC<PageAddListing2Props> = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Your place location</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
      <div>
          <Label>Detailed address</Label>
          <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            1110 Pennsylvania Avenue NW, Washington, DC 20230
          </span>
          <div className="mt-4">
            <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
              <div className="rounded-xl overflow-hidden">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                  }}
                  yesIWantToUseGoogleMapApiInternals
                  defaultZoom={10}
                  defaultCenter={{
                    lat: 55.9607277,
                    lng: 36.2172614,
                  }}
                >
                  <LocationMarker lat={55.9607277} lng={36.2172614} />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold">Passenger details</h2>

        {/* ITEM */}
        <FormItem label="Name">
          <Input placeholder="Name" />
        </FormItem>
        <FormItem label="Email">
          <Input />
        </FormItem>
        <FormItem label="Mobile No.">
          <Input />
        </FormItem>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
          <FormItem label="City">
            <Input />
          </FormItem>
          <FormItem label="State">
            <Input />
          </FormItem>
          <FormItem label="Postal code">
            <Input />
          </FormItem>
        </div> */}
          <div className="pt-8">
            <ButtonPrimary href={"/checkout"}>Continue to book</ButtonPrimary>
          </div>
      </div>
    </>
  );
};

export default PageAddListing2;
