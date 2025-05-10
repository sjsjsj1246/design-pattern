// 추상 팩토리: 플랫폼에 따라 호환되는 UI 컴포넌트를 생성
interface UIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Windows 플랫폼에 맞는 UI 컴포넌트를 생성하는 팩토리
class WindowsUIFactory implements UIFactory {
    public createButton(): Button {
        return new WindowsButton();
    }

    public createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

// macOS 플랫폼에 맞는 UI 컴포넌트를 생성하는 팩토리
class MacOSUIFactory implements UIFactory {
    public createButton(): Button {
        return new MacOSButton();
    }

    public createCheckbox(): Checkbox {
        return new MacOSCheckbox();
    }
}

// 버튼 컴포넌트의 공통 인터페이스
interface Button {
    render(): string;
}

// Windows 스타일의 버튼 구현
class WindowsButton implements Button {
    public render(): string {
        return "Rendering Windows Button";
    }
}

// macOS 스타일의 버튼 구현
class MacOSButton implements Button {
    public render(): string {
        return "Rendering macOS Button";
    }
}

// 체크박스 컴포넌트의 공통 인터페이스
interface Checkbox {
    render(): string;
}

// Windows 스타일의 체크박스 구현
class WindowsCheckbox implements Checkbox {
    public render(): string {
        return "Rendering Windows Checkbox";
    }
}

// macOS 스타일의 체크박스 구현
class MacOSCheckbox implements Checkbox {
    public render(): string {
        return "Rendering macOS Checkbox";
    }
}

// 클라이언트 코드: 추상 팩토리를 사용하여 UI 컴포넌트를 생성
function clientApp(factory: UIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    console.log(button.render());
    console.log(checkbox.render());
}

// Windows UI 생성
console.log("App: Rendering Windows UI");
clientApp(new WindowsUIFactory());

// macOS UI 생성
console.log("App: Rendering macOS UI");
clientApp(new MacOSUIFactory());
