'use client'
import React from 'react';

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";

  interface TestimonialCardProps {
    testimonial: string;
    name: string;
  }
  
   
  export default function Example({testimonial, name}:TestimonialCardProps) {
    return (
      <Card className="flex flex-col items-center justify-center mt-6 sm:h-52 w-full">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>
            {testimonial}
          </Typography>
        </CardBody>
        {/* <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter> */}
      </Card>
    );
  }
