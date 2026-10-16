import { Card, IconWrapper, Texts, Value, Title } from "./StatCard.styles";
import { Tooltip } from "../Tooltip/Tooltip";

export function StatCard({ title, value, color, icon: Icon, hint }) {
  return (
    <Card>
      <Texts>
        <Value>{value}</Value>
        <Title>{title}</Title>
      </Texts>
      {Icon && (
        <IconWrapper $color={color}>
          {hint ? (
            <Tooltip text={hint}>
              <Icon aria-hidden="true" />
            </Tooltip>
          ) : (
            <Icon aria-hidden="true" />
          )}
        </IconWrapper>
      )}
    </Card>
  );
}
