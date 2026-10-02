import iconInstagram from "@/assets/images/icon-instagram.svg"
import iconWhatsapp from "@/assets/images/icon-whatsapp.svg"
import iconTiktok from "@/assets/images/icon-tiktok.svg"
import iconFacebook from "@/assets/images/icon-facebook.svg"

const socialLinks = [
    { href: "#", icon: iconInstagram, name: "Instagram" },
    { href: "#", icon: iconFacebook, name: "Facebook" },
    { href: "#", icon: iconTiktok, name: "TikTok" },
    { href: "#", icon: iconWhatsapp, name: "WhatsApp" },
]

export const SocialLinks = () => {
    return (
        <div>
            <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>
            <ul className="flex gap-5">
                {socialLinks.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label={name}>
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}