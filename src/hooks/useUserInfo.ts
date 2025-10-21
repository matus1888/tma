import { TelegramUserManager } from "../services";

export function useUserInfo() {
  const manager = new TelegramUserManager();
  if (manager.isTelegramWebApp() && manager.isUserAvailable()) {
    return manager;
  } else {
    return null;
  }
}
