import React from 'react';

export default function Contact(){
    return (
        <div className="contact-container">
            <div className="contact-title">Contact</div>
            <div className="contact-message">ご質問やご相談等ございましたら、以下のフォームからお問い合わせお願いします。<br/>ご内容を確認しましたら、返信いたしますのでお待ちください。</div>
            <div className="mail-icon"></div>
            <div className="mail-arrow">↓</div>
            <div className="mail-adress">
                <div id="iframeWarpper">
                    <iframe className="contact-forms"
                            src="https://docs.google.com/forms/d/e/1FAIpQLSc75o3789UJhDQ0AmoB5GJOh2aWTjauSWcjV_H0DhQvTVZgdw/viewform?embedded=true"
                            width="640" height="685" frameBorder="0" marginHeight="0" marginWidth="0"
                            scrolling="no"
                            >
                        Loading…
                    </iframe>
                </div>
            </div>

        </div>
    );
}
