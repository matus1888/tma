interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
}

interface TelegramWebApp {
  initDataUnsafe?: {
    user?: TelegramUser;
  };
  ready(): void;
}

interface TelegramGlobal {
  WebApp: TelegramWebApp;
}

declare global {
  interface Window {
    Telegram?: TelegramGlobal;
  }
}

interface UserInfo {
  name: string;
  avatar: string;
  id?: number;
  hasCustomAvatar: boolean;
}

export class TelegramUserManager {
  private user: TelegramUser | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    try {
      if (this.isTelegramWebApp()) {
        this.user = window.Telegram!.WebApp.initDataUnsafe?.user || null;
        window.Telegram!.WebApp.ready();
      }
    } catch (error) {
      console.error("Ошибка инициализации Telegram WebApp:", error);
    }
  }

  public isTelegramWebApp(): boolean {
    return !!(window.Telegram && window.Telegram.WebApp);
  }

  public getUserName(): string {
    if (!this.user) return "Гость";

    return this.user.first_name || this.user.username || `User${this.user.id}`;
  }

  public getUserAvatar(): string {
    if (!this.user || !this.user.photo_url) {
      return this.generateDefaultAvatar();
    }
    return this.user.photo_url;
  }

  private generateDefaultAvatar(): string {
    const name = this.getUserName();
    const initial = name.charAt(0).toUpperCase();
    // Можно использовать разные сервисы для генерации аватаров
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(initial)}&background=007bff&color=ffffff&size=100`;
  }

  public getUserInfo(): UserInfo {
    const name = this.getUserName();
    const avatar = this.getUserAvatar();

    return {
      name,
      avatar,
      id: this.user?.id,
      hasCustomAvatar: !!this.user?.photo_url,
    };
  }

  public getFullUserData(): TelegramUser | null {
    return this.user;
  }

  public isUserAvailable(): boolean {
    return !!this.user;
  }
}

// Пример использования
// const userManager = new TelegramUserManager();
//
// if (userManager.isTelegramWebApp()) {
//   const userInfo = userManager.getUserInfo();
//
//   console.log('Имя:', userInfo.name);
//   console.log('Аватар:', userInfo.avatar);
//   console.log('ID:', userInfo.id);
//   console.log('Кастомный аватар:', userInfo.hasCustomAvatar);
//
//   // Использование в интерфейсе
//   const userNameElement = document.getElementById('user-name');
//   const userAvatarElement = document.getElementById('user-avatar') as HTMLImageElement;
//
//   if (userNameElement) {
//     userNameElement.textContent = userInfo.name;
//   }
//
//   if (userAvatarElement) {
//     userAvatarElement.src = userInfo.avatar;
//     userAvatarElement.alt = `Аватар ${userInfo.name}`;
//   }
// } else {
//   console.log('Приложение запущено вне Telegram');
// }
