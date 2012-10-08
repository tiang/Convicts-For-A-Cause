<?xml version="1.0" encoding="utf-8"?>
<serviceModel xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="WindowsAzureProject1" generation="1" functional="0" release="0" Id="42cb4303-2684-4501-ba5e-c6f742c2f1a6" dslVersion="1.2.0.0" xmlns="http://schemas.microsoft.com/dsltools/RDSM">
  <groups>
    <group name="WindowsAzureProject1Group" generation="1" functional="0" release="0">
      <componentports>
        <inPort name="Convicts For A Cause:Endpoint1" protocol="http">
          <inToChannel>
            <lBChannelMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/LB:Convicts For A Cause:Endpoint1" />
          </inToChannel>
        </inPort>
        <inPort name="Convicts For A Cause:Endpoint2" protocol="https">
          <inToChannel>
            <lBChannelMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/LB:Convicts For A Cause:Endpoint2" />
          </inToChannel>
        </inPort>
        <inPort name="Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput" protocol="tcp">
          <inToChannel>
            <lBChannelMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/LB:Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput" />
          </inToChannel>
        </inPort>
      </componentports>
      <settings>
        <aCS name="Certificate|Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapCertificate|Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
          </maps>
        </aCS>
        <aCS name="Certificate|Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapCertificate|Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
          </maps>
        </aCS>
        <aCS name="Convicts For A Cause:?IsSimulationEnvironment?" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapConvicts For A Cause:?IsSimulationEnvironment?" />
          </maps>
        </aCS>
        <aCS name="Convicts For A Cause:?RoleHostDebugger?" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapConvicts For A Cause:?RoleHostDebugger?" />
          </maps>
        </aCS>
        <aCS name="Convicts For A Cause:?StartupTaskDebugger?" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapConvicts For A Cause:?StartupTaskDebugger?" />
          </maps>
        </aCS>
        <aCS name="Convicts For A Cause:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" />
          </maps>
        </aCS>
        <aCS name="Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" />
          </maps>
        </aCS>
        <aCS name="Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" />
          </maps>
        </aCS>
        <aCS name="Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" />
          </maps>
        </aCS>
        <aCS name="Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteForwarder.Enabled" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteForwarder.Enabled" />
          </maps>
        </aCS>
        <aCS name="Convicts For A CauseInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapConvicts For A CauseInstances" />
          </maps>
        </aCS>
        <aCS name="Leaderboard:?IsSimulationEnvironment?" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapLeaderboard:?IsSimulationEnvironment?" />
          </maps>
        </aCS>
        <aCS name="Leaderboard:?RoleHostDebugger?" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapLeaderboard:?RoleHostDebugger?" />
          </maps>
        </aCS>
        <aCS name="Leaderboard:?StartupTaskDebugger?" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapLeaderboard:?StartupTaskDebugger?" />
          </maps>
        </aCS>
        <aCS name="Leaderboard:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapLeaderboard:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </maps>
        </aCS>
        <aCS name="Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapLeaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" />
          </maps>
        </aCS>
        <aCS name="Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapLeaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" />
          </maps>
        </aCS>
        <aCS name="Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapLeaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" />
          </maps>
        </aCS>
        <aCS name="Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" defaultValue="">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapLeaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" />
          </maps>
        </aCS>
        <aCS name="LeaderboardInstances" defaultValue="[1,1,1]">
          <maps>
            <mapMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/MapLeaderboardInstances" />
          </maps>
        </aCS>
      </settings>
      <channels>
        <lBChannel name="LB:Convicts For A Cause:Endpoint1">
          <toPorts>
            <inPortMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Endpoint1" />
          </toPorts>
        </lBChannel>
        <lBChannel name="LB:Convicts For A Cause:Endpoint2">
          <toPorts>
            <inPortMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Endpoint2" />
          </toPorts>
        </lBChannel>
        <lBChannel name="LB:Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput">
          <toPorts>
            <inPortMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput" />
          </toPorts>
        </lBChannel>
        <sFSwitchChannel name="SW:Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp">
          <toPorts>
            <inPortMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" />
          </toPorts>
        </sFSwitchChannel>
        <sFSwitchChannel name="SW:Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp">
          <toPorts>
            <inPortMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" />
          </toPorts>
        </sFSwitchChannel>
      </channels>
      <maps>
        <map name="MapCertificate|Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" kind="Identity">
          <certificate>
            <certificateMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
          </certificate>
        </map>
        <map name="MapCertificate|Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" kind="Identity">
          <certificate>
            <certificateMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
          </certificate>
        </map>
        <map name="MapConvicts For A Cause:?IsSimulationEnvironment?" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/?IsSimulationEnvironment?" />
          </setting>
        </map>
        <map name="MapConvicts For A Cause:?RoleHostDebugger?" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/?RoleHostDebugger?" />
          </setting>
        </map>
        <map name="MapConvicts For A Cause:?StartupTaskDebugger?" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/?StartupTaskDebugger?" />
          </setting>
        </map>
        <map name="MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" />
          </setting>
        </map>
        <map name="MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" />
          </setting>
        </map>
        <map name="MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" />
          </setting>
        </map>
        <map name="MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" />
          </setting>
        </map>
        <map name="MapConvicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteForwarder.Enabled" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.RemoteForwarder.Enabled" />
          </setting>
        </map>
        <map name="MapConvicts For A CauseInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A CauseInstances" />
          </setting>
        </map>
        <map name="MapLeaderboard:?IsSimulationEnvironment?" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/?IsSimulationEnvironment?" />
          </setting>
        </map>
        <map name="MapLeaderboard:?RoleHostDebugger?" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/?RoleHostDebugger?" />
          </setting>
        </map>
        <map name="MapLeaderboard:?StartupTaskDebugger?" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/?StartupTaskDebugger?" />
          </setting>
        </map>
        <map name="MapLeaderboard:Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" />
          </setting>
        </map>
        <map name="MapLeaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" />
          </setting>
        </map>
        <map name="MapLeaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" />
          </setting>
        </map>
        <map name="MapLeaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" />
          </setting>
        </map>
        <map name="MapLeaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" kind="Identity">
          <setting>
            <aCSMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" />
          </setting>
        </map>
        <map name="MapLeaderboardInstances" kind="Identity">
          <setting>
            <sCSPolicyIDMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/LeaderboardInstances" />
          </setting>
        </map>
      </maps>
      <components>
        <groupHascomponents>
          <role name="Convicts For A Cause" generation="1" functional="0" release="0" software="C:\Users\Heng Teng\Desktop\Tiang\Dropbox\Convicts\Convicts For A Cause\WindowsAzureProject1\bin\Debug\WindowsAzureProject1.csx\roles\Convicts For A Cause" entryPoint="base\x86\WaHostBootstrapper.exe" parameters="base\x86\WaIISHost.exe " memIndex="1792" hostingEnvironment="frontendadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Endpoint1" protocol="http" portRanges="80" />
              <inPort name="Endpoint2" protocol="https" portRanges="443">
                <certificate>
                  <certificateMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
                </certificate>
              </inPort>
              <inPort name="Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput" protocol="tcp" />
              <inPort name="Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" protocol="tcp" portRanges="3389" />
              <outPort name="Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" protocol="tcp">
                <outToChannel>
                  <sFSwitchChannelMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/SW:Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" />
                </outToChannel>
              </outPort>
              <outPort name="Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" protocol="tcp">
                <outToChannel>
                  <sFSwitchChannelMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/SW:Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" />
                </outToChannel>
              </outPort>
            </componentports>
            <settings>
              <aCS name="?IsSimulationEnvironment?" defaultValue="" />
              <aCS name="?RoleHostDebugger?" defaultValue="" />
              <aCS name="?StartupTaskDebugger?" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteForwarder.Enabled" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;Convicts For A Cause&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;Convicts For A Cause&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;e name=&quot;Endpoint2&quot; /&gt;&lt;e name=&quot;Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp&quot; /&gt;&lt;e name=&quot;Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput&quot; /&gt;&lt;/r&gt;&lt;r name=&quot;Leaderboard&quot;&gt;&lt;e name=&quot;Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
            <storedcertificates>
              <storedCertificate name="Stored0Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" certificateStore="My" certificateLocation="System">
                <certificate>
                  <certificateMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause/Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
                </certificate>
              </storedCertificate>
            </storedcertificates>
            <certificates>
              <certificate name="Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
            </certificates>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A CauseInstances" />
          </sCSPolicy>
        </groupHascomponents>
        <groupHascomponents>
          <role name="Leaderboard" generation="1" functional="0" release="0" software="C:\Users\Heng Teng\Desktop\Tiang\Dropbox\Convicts\Convicts For A Cause\WindowsAzureProject1\bin\Debug\WindowsAzureProject1.csx\roles\Leaderboard" entryPoint="base\x86\WaHostBootstrapper.exe" parameters="base\x86\WaWorkerHost.exe " memIndex="1792" hostingEnvironment="consoleroleadmin" hostingEnvironmentVersion="2">
            <componentports>
              <inPort name="Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" protocol="tcp" portRanges="3389" />
              <outPort name="Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" protocol="tcp">
                <outToChannel>
                  <sFSwitchChannelMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/SW:Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" />
                </outToChannel>
              </outPort>
              <outPort name="Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" protocol="tcp">
                <outToChannel>
                  <sFSwitchChannelMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/SW:Leaderboard:Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp" />
                </outToChannel>
              </outPort>
            </componentports>
            <settings>
              <aCS name="?IsSimulationEnvironment?" defaultValue="" />
              <aCS name="?RoleHostDebugger?" defaultValue="" />
              <aCS name="?StartupTaskDebugger?" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.Diagnostics.ConnectionString" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountEncryptedPassword" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountExpiration" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.AccountUsername" defaultValue="" />
              <aCS name="Microsoft.WindowsAzure.Plugins.RemoteAccess.Enabled" defaultValue="" />
              <aCS name="__ModelData" defaultValue="&lt;m role=&quot;Leaderboard&quot; xmlns=&quot;urn:azure:m:v1&quot;&gt;&lt;r name=&quot;Convicts For A Cause&quot;&gt;&lt;e name=&quot;Endpoint1&quot; /&gt;&lt;e name=&quot;Endpoint2&quot; /&gt;&lt;e name=&quot;Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp&quot; /&gt;&lt;e name=&quot;Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput&quot; /&gt;&lt;/r&gt;&lt;r name=&quot;Leaderboard&quot;&gt;&lt;e name=&quot;Microsoft.WindowsAzure.Plugins.RemoteAccess.Rdp&quot; /&gt;&lt;/r&gt;&lt;/m&gt;" />
            </settings>
            <resourcereferences>
              <resourceReference name="DiagnosticStore" defaultAmount="[4096,4096,4096]" defaultSticky="true" kind="Directory" />
              <resourceReference name="EventStore" defaultAmount="[1000,1000,1000]" defaultSticky="false" kind="LogStore" />
            </resourcereferences>
            <storedcertificates>
              <storedCertificate name="Stored0Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" certificateStore="My" certificateLocation="System">
                <certificate>
                  <certificateMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Leaderboard/Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
                </certificate>
              </storedCertificate>
            </storedcertificates>
            <certificates>
              <certificate name="Microsoft.WindowsAzure.Plugins.RemoteAccess.PasswordEncryption" />
            </certificates>
          </role>
          <sCSPolicy>
            <sCSPolicyIDMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/LeaderboardInstances" />
          </sCSPolicy>
        </groupHascomponents>
      </components>
      <sCSPolicy>
        <sCSPolicyID name="Convicts For A CauseInstances" defaultPolicy="[1,1,1]" />
        <sCSPolicyID name="LeaderboardInstances" defaultPolicy="[1,1,1]" />
      </sCSPolicy>
    </group>
  </groups>
  <implements>
    <implementation Id="2dd2f467-a1e3-45b8-8484-f7d3d0883fb5" ref="Microsoft.RedDog.Contract\ServiceContract\WindowsAzureProject1Contract@ServiceDefinition.build">
      <interfacereferences>
        <interfaceReference Id="2fc94cd7-1e63-4e5b-bb55-50aedcc8098d" ref="Microsoft.RedDog.Contract\Interface\Convicts For A Cause:Endpoint1@ServiceDefinition.build">
          <inPort>
            <inPortMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause:Endpoint1" />
          </inPort>
        </interfaceReference>
        <interfaceReference Id="db41abaf-e97d-43b7-b902-90c80abb6d45" ref="Microsoft.RedDog.Contract\Interface\Convicts For A Cause:Endpoint2@ServiceDefinition.build">
          <inPort>
            <inPortMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause:Endpoint2" />
          </inPort>
        </interfaceReference>
        <interfaceReference Id="ac56f522-5b84-4df6-9c13-a9b7230ae1d9" ref="Microsoft.RedDog.Contract\Interface\Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput@ServiceDefinition.build">
          <inPort>
            <inPortMoniker name="/WindowsAzureProject1/WindowsAzureProject1Group/Convicts For A Cause:Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput" />
          </inPort>
        </interfaceReference>
      </interfacereferences>
    </implementation>
  </implements>
</serviceModel>