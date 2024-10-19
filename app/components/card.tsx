"use client"
import Link from "next/link"
import { IconContext } from "react-icons"
import { 
    IoMailOutline
} from "react-icons/io5"
import { Container } from "./container"

export const Card = () => {
  return (
    <Container className="service_contain block mt-[80px]">
        <div className="service_card my-[60px] grid grid-cols-2 md:grid-cols-4">
            <div className="card">
                <span className="" style={{ backgroundColor: "" }}>
                    <IconContext.Provider value={{ color: "#14da8f", size: "22px" }}>
                        <IoMailOutline />
                    </IconContext.Provider>
                </span>
                <h2 className="font-agdasima text-xl text-blue font-semibold pt-2">Recruitment</h2>
                <div className="ml-5">
                    <div className="flex items-center mt-2 gap-3">
                        <span className="w-2 h-1 bg-blue block"></span>
                        <p className="text-xs">Talent Acquisiton</p>
                    </div>
                </div>
                <div className="ml-5">
                    <div className="flex items-center mt-2 gap-3">
                        <span className="w-2 h-1 bg-blue block"></span>
                        <p className="text-xs">Talent Acquisiton</p>
                    </div>
                </div>
                
            </div>
            <div className="card">
                <span className="" style={{ backgroundColor: "" }}>
                    <IconContext.Provider value={{ color: "#5700cf", size: "22px" }}>
                        <IoMailOutline />
                    </IconContext.Provider>
                </span>
                <h2 className="font-agdasima text-xl text-blue font-semibold pt-2">Hr Consulting</h2>
                <div className="ml-5">
                    <div className="flex items-center mt-2 gap-3">
                        <span className="w-2 h-1 bg-blue block"></span>
                        <p className="text-xs">Talent Acquisiton</p>
                    </div>
                </div>
                <div className="ml-5">
                    <div className="flex items-center mt-2 gap-3">
                        <span className="w-2 h-1 bg-blue block"></span>
                        <p className="text-xs">Talent Acquisiton</p>
                    </div>
                </div>
                
            </div>
            <div className="card">
                <span className="" style={{ backgroundColor: "" }}>
                    <IconContext.Provider value={{ color: "#ff8559", size: "22px" }}>
                        <IoMailOutline />
                    </IconContext.Provider>
                </span>
                <h2 className="font-agdasima text-xl text-blue font-semibold pt-2">Payroll Admin</h2>
                <div className="ml-5">
                    <div className="flex items-center mt-2 gap-3">
                        <span className="w-2 h-1 bg-blue block"></span>
                        <p className="text-xs">Talent Acquisiton</p>
                    </div>
                </div>
                <div className="ml-5">
                    <div className="flex items-center mt-2 gap-3">
                        <span className="w-2 h-1 bg-blue block"></span>
                        <p className="text-xs">Talent Acquisiton</p>
                    </div>
                </div>
                
            </div>
            <div className="card">
                <span className="" style={{ backgroundColor: "" }}>
                    <IconContext.Provider value={{ color: "#fa3970", size: "22px" }}>
                        <IoMailOutline />
                    </IconContext.Provider>
                </span>
                <h2 className="font-agdasima text-xl text-blue font-semibold pt-2">Hr Tech</h2>
                <div className="ml-5">
                    <div className="flex items-center mt-2 gap-3">
                        <span className="w-2 h-1 bg-blue block"></span>
                        <p className="text-xs">Talent Acquisiton</p>
                    </div>
                </div>
                <div className="ml-5">
                    <div className="flex items-center mt-2 gap-3">
                        <span className="w-2 h-1 bg-blue block"></span>
                        <p className="text-xs">Talent Acquisiton</p>
                    </div>
                </div>
                
            </div>
        </div>
    </Container>
  )
}
