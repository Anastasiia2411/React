import React from "react";

import { FooterWrapper, FooterElement, FooterElementHeader, FooterElementLink } from "./Footer.style";

export function Footer() {
    return (
        <FooterWrapper>
            <FooterElement>
                <FooterElementHeader>
                    КОНТАКТИ
                </FooterElementHeader>
                <ul>
                    <li>
                        <a href="">
                            <svg width="20" height="20" viewBox="0 0 17 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.50016 6.12504C7.87027 6.12504 7.26618 6.37526 6.82078 6.82066C6.37539 7.26606 6.12516 7.87015 6.12516 8.50004C6.12516 9.12993 6.37539 9.73402 6.82078 10.1794C7.26618 10.6248 7.87027 10.875 8.50016 10.875C9.13005 10.875 9.73414 10.6248 10.1795 10.1794C10.6249 9.73402 10.8752 9.12993 10.8752 8.50004C10.8752 7.87015 10.6249 7.26606 10.1795 6.82066C9.73414 6.37526 9.13005 6.12504 8.50016 6.12504ZM8.50016 4.54171C9.54998 4.54171 10.5568 4.95875 11.2991 5.70108C12.0415 6.44341 12.4585 7.45023 12.4585 8.50004C12.4585 9.54986 12.0415 10.5567 11.2991 11.299C10.5568 12.0413 9.54998 12.4584 8.50016 12.4584C7.45035 12.4584 6.44353 12.0413 5.7012 11.299C4.95887 10.5567 4.54183 9.54986 4.54183 8.50004C4.54183 7.45023 4.95887 6.44341 5.7012 5.70108C6.44353 4.95875 7.45035 4.54171 8.50016 4.54171ZM13.646 4.34379C13.646 4.60625 13.5417 4.85795 13.3562 5.04353C13.1706 5.22912 12.9189 5.33337 12.6564 5.33337C12.394 5.33337 12.1423 5.22912 11.9567 5.04353C11.7711 4.85795 11.6668 4.60625 11.6668 4.34379C11.6668 4.08134 11.7711 3.82963 11.9567 3.64405C12.1423 3.45847 12.394 3.35421 12.6564 3.35421C12.9189 3.35421 13.1706 3.45847 13.3562 3.64405C13.5417 3.82963 13.646 4.08134 13.646 4.34379ZM8.50016 2.16671C6.54158 2.16671 6.22175 2.17225 5.31054 2.21262C4.68987 2.24192 4.27345 2.32504 3.88712 2.47546C3.54354 2.60846 3.29575 2.76758 3.03212 3.032C2.78434 3.2714 2.59382 3.56367 2.47479 3.887C2.32437 4.27492 2.24125 4.69054 2.21275 5.31042C2.17158 6.18442 2.16683 6.49 2.16683 8.50004C2.16683 10.4586 2.17237 10.7785 2.21275 11.6897C2.24204 12.3095 2.32516 12.7268 2.47479 13.1123C2.60937 13.4567 2.7677 13.7045 3.03054 13.9673C3.29733 14.2333 3.54512 14.3924 3.88554 14.5238C4.27662 14.675 4.69304 14.759 5.31054 14.7875C6.18454 14.8286 6.49012 14.8334 8.50016 14.8334C10.4587 14.8334 10.7786 14.8278 11.6898 14.7875C12.3089 14.7582 12.7261 14.675 13.1124 14.5254C13.4552 14.3916 13.7046 14.2325 13.9674 13.9697C14.2342 13.7029 14.3933 13.4551 14.5247 13.1147C14.6752 12.7244 14.7591 12.3072 14.7876 11.6897C14.8287 10.8157 14.8335 10.5101 14.8335 8.50004C14.8335 6.54146 14.828 6.22162 14.7876 5.31042C14.7583 4.69133 14.6752 4.27333 14.5247 3.887C14.4054 3.564 14.2153 3.27184 13.9682 3.032C13.7289 2.78409 13.4366 2.59355 13.1132 2.47467C12.7253 2.32425 12.3089 2.24112 11.6898 2.21262C10.8158 2.17146 10.5102 2.16671 8.50016 2.16671ZM8.50016 0.583374C10.6511 0.583374 10.9195 0.591291 11.7634 0.630874C12.6065 0.670457 13.1805 0.802666 13.6856 0.998999C14.2081 1.20008 14.6482 1.47242 15.0884 1.91179C15.491 2.30754 15.8025 2.78626 16.0012 3.31462C16.1967 3.81892 16.3297 4.39367 16.3693 5.23679C16.4065 6.08071 16.4168 6.34908 16.4168 8.50004C16.4168 10.651 16.4089 10.9194 16.3693 11.7633C16.3297 12.6064 16.1967 13.1804 16.0012 13.6855C15.803 14.2141 15.4915 14.6929 15.0884 15.0883C14.6926 15.4907 14.2139 15.8022 13.6856 16.0011C13.1813 16.1966 12.6065 16.3296 11.7634 16.3692C10.9195 16.4064 10.6511 16.4167 8.50016 16.4167C6.34921 16.4167 6.08083 16.4088 5.23691 16.3692C4.39379 16.3296 3.81983 16.1966 3.31475 16.0011C2.78617 15.8028 2.30737 15.4912 1.91191 15.0883C1.50928 14.6926 1.19778 14.2139 0.999121 13.6855C0.802788 13.1812 0.670579 12.6064 0.630996 11.7633C0.593788 10.9194 0.583496 10.651 0.583496 8.50004C0.583496 6.34908 0.591413 6.08071 0.630996 5.23679C0.670579 4.39287 0.802788 3.81971 0.999121 3.31462C1.19722 2.78593 1.5088 2.30709 1.91191 1.91179C2.30749 1.50902 2.78625 1.19749 3.31475 0.998999C3.81983 0.802666 4.393 0.670457 5.23691 0.630874C6.08083 0.593666 6.34921 0.583374 8.50016 0.583374Z"
                                    fill="#E0BEA2"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <svg width="20" height="20" viewBox="0 0 17 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.50016 14.8334C10.1799 14.8334 11.7908 14.1661 12.9785 12.9784C14.1662 11.7907 14.8335 10.1797 14.8335 8.50004C14.8335 6.82034 14.1662 5.20943 12.9785 4.0217C11.7908 2.83397 10.1799 2.16671 8.50016 2.16671C6.82046 2.16671 5.20955 2.83397 4.02182 4.0217C2.83409 5.20943 2.16683 6.82034 2.16683 8.50004C2.16683 10.1797 2.83409 11.7907 4.02182 12.9784C5.20955 14.1661 6.82046 14.8334 8.50016 14.8334ZM8.50016 16.4167C4.12779 16.4167 0.583496 12.8724 0.583496 8.50004C0.583496 4.12767 4.12779 0.583374 8.50016 0.583374C12.8725 0.583374 16.4168 4.12767 16.4168 8.50004C16.4168 12.8724 12.8725 16.4167 8.50016 16.4167ZM6.03808 9.42629L4.0605 8.80958C3.633 8.67896 3.63062 8.38446 4.15629 8.17308L11.8616 5.19642C12.3089 5.01433 12.5622 5.24471 12.4173 5.82183L11.1055 12.0127C11.0137 12.4536 10.7485 12.5589 10.3804 12.3555L8.36083 10.8608L7.41954 11.7696C7.32296 11.863 7.24458 11.943 7.09575 11.9628C6.9477 11.9834 6.82579 11.939 6.73633 11.6936L6.04758 9.42075L6.03808 9.42629Z"
                                    fill="#E0BEA2"/>
                            </svg>
                        </a>
                    </li>
                </ul>
                <FooterElementLink href="tel:+380441234567">+38 (044) 123-45-67</FooterElementLink>
                <FooterElementLink href="info@yanki.com">info@yanki.com</FooterElementLink>
            </FooterElement>
            <FooterElement>
                <FooterElementHeader>
                    ПОКУПЦЮ
                </FooterElementHeader>
                <FooterElementLink>
                    Вибране
                </FooterElementLink>
                <FooterElementLink>
                    Публічна оферта
                </FooterElementLink>
                <FooterElementLink>
                    Політика конфіденційності
                </FooterElementLink>
            </FooterElement>
            <FooterElement>
                <FooterElementHeader>
                    КОРИСНЕ
                </FooterElementHeader>
                <FooterElementLink>
                    Оплата і доставка
                </FooterElementLink>

                <FooterElementLink>
                    Умови повернення
                </FooterElementLink>
                <FooterElementLink>
                    Бонусна система
                </FooterElementLink>
            </FooterElement>
            <FooterElement>
                <FooterElementHeader>
                    КОМПАНІЯ
                </FooterElementHeader>
                <FooterElementLink>
                    Про нас
                </FooterElementLink>
                <FooterElementLink>
                    Контакти
                </FooterElementLink>
            </FooterElement>
        </FooterWrapper>
    );
}
