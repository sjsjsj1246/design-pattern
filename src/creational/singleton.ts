/**
 * 애플리케이션 설정 관리 클래스: 싱글턴 패턴 적용
 */
class AppConfig {
    private static instance: AppConfig;
    private settings: { [key: string]: string } = {};

    /**
     * 생성자를 private으로 설정하여 외부에서 인스턴스 생성 방지
     */
    private constructor() {}

    /**
     * 싱글턴 인스턴스 반환 메서드
     */
    public static getInstance(): AppConfig {
        if (!AppConfig.instance) {
            AppConfig.instance = new AppConfig();
        }
        return AppConfig.instance;
    }

    /**
     * 설정 추가 메서드
     */
    public set(key: string, value: string): void {
        this.settings[key] = value;
    }

    /**
     * 설정 가져오기 메서드
     */
    public get(key: string): string | undefined {
        return this.settings[key];
    }
}

/**
 * 클라이언트 코드: 설정 관리 싱글턴 사용
 */
function clientCode() {
    const config1 = AppConfig.getInstance();
    config1.set("theme", "dark");
    config1.set("language", "en");

    const config2 = AppConfig.getInstance();
    console.log("Theme:", config2.get("theme")); // dark
    console.log("Language:", config2.get("language")); // en

    if (config1 === config2) {
        console.log("AppConfig is a singleton. Both instances are the same.");
    } else {
        console.log("AppConfig failed. Instances are different.");
    }
}

clientCode();
