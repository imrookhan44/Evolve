import MainPageLayout from "../components/layout/MainPageLayout"
import CharacterNavMenu from "../components/ui/CharacterNavMenu"
import CharacterProfileHeader from "../components/ui/CharacterProfileHeader"
import VoiceSettingsPanel from "../components/ui/VoiceSettingPanel"

function MainPage() {
  return (
    <>
      <MainPageLayout>
        <CharacterProfileHeader />
        <CharacterNavMenu />
        <VoiceSettingsPanel />
      </MainPageLayout>

    </>
  )
}

export default MainPage
