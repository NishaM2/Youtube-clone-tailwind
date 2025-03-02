
export function VideoCard() {
    return (
        <div>
            <img src="/photo.png" className="rounded-xl"></img>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img className={"rounded-full w-12 h-12"} src="/photo.png"></img>
                </div>
                <div className="col-span-11 pl-2">
                    <div>
                        Mr.bean Coffee Shop! | Mr Bean Animated season 3 | Full Episodes | Mr Bean
                    </div>
                    <div className="col-span-11 text-gray-300 text-base">
                        Nisha M
                    </div>

                    <div className="col-span-11 text-gray-300 text-base">
                        45Mn | 15 days ago
                    </div>
                </div>
            </div>
        </div>
    )
}
