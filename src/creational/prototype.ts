/**
 * 사용자 설정 클래스: 복제를 지원
 */
class UserSettings {
    public theme: string;
    public language: string;
    public shortcuts: object;

    constructor(theme: string, language: string, shortcuts: object) {
        this.theme = theme;
        this.language = language;
        this.shortcuts = shortcuts;
    }

    /**
     * 프로토타입 패턴: 객체 복제 메서드
     */
    public clone(): UserSettings {
        return new UserSettings(
            this.theme,
            this.language,
            { ...this.shortcuts } // 깊은 복사
        );
    }
}

/**
 * 클라이언트 코드: 사용자 설정 복제
 */
function clientCode() {
    const originalSettings = new UserSettings("dark", "en", {
        save: "Ctrl+S",
        open: "Ctrl+O",
    });

    console.log("Original Settings:", originalSettings);

    // 복제된 설정 생성
    const clonedSettings = originalSettings.clone();
    clonedSettings.language = "fr"; // 복제본 수정

    console.log("Cloned Settings:", clonedSettings);
    console.log(
        "Original Settings after clone modification:",
        originalSettings
    );

    // 원본과 복제본이 독립적인지 확인
    if (originalSettings.shortcuts === clonedSettings.shortcuts) {
        console.log("Shortcuts are shared. Booo!");
    } else {
        console.log("Shortcuts are independent. Yay!");
    }
}

clientCode();
