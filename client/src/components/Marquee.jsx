/* eslint-disable react/prop-types */
import '../scss/marquee.scss';

const Marquee = ({ items, direction }) => {
    return (
        <section className='marquee-section'>
            <div className="marquee">
                <div className={`marquee-content ${direction}`}>
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={`marquee-item item${index + 1}`}
                            style={{
                                animationDirection: direction === 'right' ? 'reverse' : 'normal'
                            }}
                        >
                            {item.type === 'icon' ? (
                                <i className={item.src} style={{ "--logo-hover-color": item.color }}></i>
                            ) : (
                                <img src={item.src} style={{ "--logo-hover-color": item.color }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Marquee