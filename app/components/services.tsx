import { Card } from './card'

export const Services = () => {
    return (
        <div>
            <div className="tit_wrap overflow-hidden">
                <span className="font-agdasima text-xl block text-center text-blue uppercase font-semibold
                overflow-hidden
                ">
                    Our Services
                </span>
                <h2 className="font-semibold text-center capitalize mt-5 text-3xl font-agdasima">
                    Save Time with <span className="font-agdasima">
                        <span className="text-blue font-[700] pr-[1px]">HRLead</span>
                        <span className="h-2 w-2 bg-blue inline-block rounded-full"></span>
                    </span>
                </h2>
            </div>
            <Card />
        </div>
    )
}
