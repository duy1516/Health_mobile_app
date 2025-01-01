import { Stack } from "expo-router"
import "../global.css"
import { UserProvider } from "./Log In/UserContext"

const RootLayout = () => {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen
          name="Log In/log-in"
          options={{
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitle: 'Log In',
            headerTitleStyle: {
              fontWeight: 'semibold',
            },
          }}
        />

        <Stack.Screen
          name="Log In/sign-up"
          options={{
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitle: 'Create Account',
            headerTitleStyle: {
              fontWeight: 'semibold',
            },
          }}
        />

        <Stack.Screen
          name="Log In/Forgot Password/forgot-password"
          options={{
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitle: 'Forgotten Password',
            headerTitleStyle: {
              fontWeight: 'semibold',
            },
          }}
        />

        <Stack.Screen
          name="Log In/Forgot Password/otp-verify"
          options={{
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitle: 'Verification',
            headerTitleStyle: {
              fontWeight: 'semibold',
            },
          }}
        />

        <Stack.Screen
          name="Log In/Forgot Password/set-password"
          options={{
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitle: 'Set Password',
            headerTitleStyle: {
              fontWeight: 'semibold',
            },
          }}
        />

        <Stack.Screen
          name="Log In/success-screen"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Main Tabs/Tabs" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Other Tabs/profile" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Other Tabs/edit-profile" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Other Tabs/notification" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Other Tabs/setting" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Other Tabs/notification-setting" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Other Tabs/articles" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Other Tabs/system-setting" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Main Tabs/Home/WorkoutLibrary/exercise" options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Main Tabs/Home/WorkoutLibrary/create-routine" options={{ headerShown: false }}></Stack.Screen>


        <Stack.Screen
          name="Log In/Set Up/gender"
          options={{
            headerTitle: 'Back',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="Log In/Set Up/age"
          options={{
            headerTitle: 'Back',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="Log In/Set Up/stats"
          options={{
            headerTitle: 'Back',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="Log In/Set Up/goal"
          options={{
            headerTitle: 'Back',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="Log In/Set Up/level"
          options={{
            headerTitle: 'Back',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="Log In/Set Up/fill-profile"
          options={{
            headerTitle: 'Back',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="Main Tabs/Home/nutrition-details"
          options={{
            headerTitle: 'Nutrition',
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </UserProvider>
  );
};

export default RootLayout;

