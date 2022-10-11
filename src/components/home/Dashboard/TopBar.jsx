import {AiFillBell} from 'react-icons/ai'
function TopBar() {

    return (
        <div>
            <section className='flex flex-col'>
                <span>
                    Hello babundo
                </span>
                <span>
                    <hr />
                </span>
                <span>
                    How is it going?
                </span>
            </section>
            <section>
                <input type="search" name="searchbar" id="" />
            </section>
            <section>
                <AiFillBell className='text-white'/>
            </section>

        </div>
    )
}

export default TopBar;